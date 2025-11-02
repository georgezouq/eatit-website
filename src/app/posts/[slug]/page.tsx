import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Wrapper from "@/layouts/Wrapper";
import BlogDetails from "@/components/blogs/blog-details";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import { getPostBySlug, getPostSlugs, getAllPostSummaries } from "@/lib/blog/api";
import markdownToHtml from "@/lib/blog/markdownToHtml";
import type { PostWithHtml } from "@/lib/blog/types";
import { toSlug } from "@/lib/blog/slug";

const buildPostWithHtml = async (slug: string): Promise<PostWithHtml | null> => {
  try {
    const post = getPostBySlug(slug);
    const contentHtml = await markdownToHtml(post.content);
    return { ...post, contentHtml };
  } catch (error) {
    console.error(`Failed to load blog post for slug "${slug}":`, error);
    return null;
  }
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await buildPostWithHtml(slug);

  if (!post) {
    return createMetadata({
      title: "HairWow Blog Article",
      path: `/posts/${slug}`,
    });
  }

  const imagePath = post.coverImage.startsWith("http") ? undefined : post.coverImage;

  return createMetadata({
    title: `${post.title} | HairWow Blog`,
    description: post.seoDescription ?? post.excerpt,
    keywords: [...(post.tags ?? []), "HairWow blog"],
    path: `/posts/${post.slug}`,
    imagePath,
  });
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await buildPostWithHtml(slug);

  if (!post) {
    notFound();
  }

  const article = post;
  const dictionary = getDictionary(defaultLocale);
  const postSummaries = getAllPostSummaries();
  const categories = postSummaries.reduce((acc, item) => {
    if (!item.category) {
      return acc;
    }
    const slugValue = toSlug(item.category);
    const existing = acc.get(slugValue);
    acc.set(slugValue, {
      name: item.category,
      slug: slugValue,
      count: existing ? existing.count + 1 : 1,
    });
    return acc;
  }, new Map<string, { name: string; slug: string; count: number }>());

  const tags = postSummaries.reduce((acc, item) => {
    item.tags?.forEach((tag) => {
      const slugValue = toSlug(tag);
      const existing = acc.get(slugValue);
      acc.set(slugValue, {
        name: tag,
        slug: slugValue,
        count: existing ? existing.count + 1 : 1,
      });
    });
    return acc;
  }, new Map<string, { name: string; slug: string; count: number }>());

  const categoryList = Array.from(categories.values()).sort((a, b) => b.count - a.count);
  const tagList = Array.from(tags.values()).sort((a, b) => b.count - a.count);
  const recentPosts = postSummaries.filter((summary) => summary.slug !== article.slug).slice(0, 3);

  return (
    <Wrapper>
      <BlogDetails
        locale={defaultLocale}
        dictionary={dictionary}
        post={article}
        recentPosts={recentPosts}
        categories={categoryList}
        tags={tagList}
      />
    </Wrapper>
  );
};

export default BlogPostPage;
