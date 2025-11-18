import Wrapper from "@/layouts/Wrapper";
import { BlogProvider } from "@/components/blogs/BlogProvider";
import { createMetadata } from "@/lib/seo";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAllPostSummaries } from "@/lib/blog/api";
import { toSlug } from "@/lib/blog/slug";
import type { CategoryWithCount, TagWithCount, PostSummary } from "@/lib/blog/types";

export const metadata = createMetadata({
  title: "Eatibo Blog | AI Salon Growth Strategies & Case Studies",
  description:
    "Explore the latest HairWow insights on AI consultations, salon marketing, and retention workflows designed to scale modern beauty businesses.",
  keywords: [
    "Eatibo Blog",
    "salon marketing",
    "AI consultations",
    "beauty business growth",
  ],
  path: "/blogs",
});

const mapCategories = (posts: PostSummary[]) => {
  const categoryMap = new Map<string, CategoryWithCount>();

  posts.forEach((post) => {
    if (!post.category) return;
    const slug = toSlug(post.category);
    const existing = categoryMap.get(slug);
    categoryMap.set(slug, {
      name: post.category,
      slug,
      count: existing ? existing.count + 1 : 1,
    });
  });

  return Array.from(categoryMap.values()).sort((a, b) => b.count - a.count);
};

const mapTags = (posts: PostSummary[]) => {
  const tagMap = new Map<string, TagWithCount>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      const slug = toSlug(tag);
      const existing = tagMap.get(slug);
      tagMap.set(slug, {
        name: tag,
        slug,
        count: existing ? existing.count + 1 : 1,
      });
    });
  });

  return Array.from(tagMap.values()).sort((a, b) => b.count - a.count);
};

const BlogListingPage = () => {
  const posts = getAllPostSummaries();
  const categories = mapCategories(posts);
  const tags = mapTags(posts);
  const recentPosts = posts.slice(0, 3);
  const dictionary = getDictionary(defaultLocale);

  return (
    <Wrapper dictionary={dictionary}>
      <BlogProvider
        initialLocale={defaultLocale}
        posts={posts}
        categories={categories}
        tags={tags}
        recentPosts={recentPosts}
      />
    </Wrapper>
  );
};

export default BlogListingPage;
