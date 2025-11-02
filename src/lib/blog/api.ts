import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import {
  type Post,
  type PostSummary,
  type PostFrontMatter,
} from "./types";
import { toSlug } from "./slug";

const postsDirectory = join(process.cwd(), "_posts");

const ensurePostsDirectory = () => {
  if (!fs.existsSync(postsDirectory)) {
    throw new Error(`Posts directory not found at ${postsDirectory}`);
  }
};

const parseFrontMatter = (data: PostFrontMatter, slug: string) => {
  if (!data.title) {
    throw new Error(`Post "${slug}" is missing a title`);
  }

  if (!data.date) {
    throw new Error(`Post "${slug}" is missing a publication date`);
  }

  if (!data.excerpt) {
    throw new Error(`Post "${slug}" is missing an excerpt`);
  }

  if (!data.coverImage) {
    throw new Error(`Post "${slug}" is missing a cover image`);
  }

  if (!data.author || !data.author.name) {
    throw new Error(`Post "${slug}" is missing author information`);
  }

  const tags = Array.isArray(data.tags) ? data.tags.filter(Boolean) : [];

  return {
    ...data,
    tags,
  } satisfies PostFrontMatter;
};

const calculateReadingTime = (content: string) => {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
};

const loadPost = (slug: string): Post => {
  ensurePostsDirectory();
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Unable to locate post file for slug "${realSlug}" at ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data as PostFrontMatter;
  const content = matterResult.content;

  const frontMatter = parseFrontMatter(data, realSlug);

  return {
    ...frontMatter,
    slug: realSlug,
    content,
    readingTimeMinutes: calculateReadingTime(content),
  } satisfies Post;
};

export const getPostSlugs = () => {
  ensurePostsDirectory();
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
};

export const getPostBySlug = (slug: string): Post => loadPost(slug);

export const getAllPostSummaries = (): PostSummary[] =>
  getPostSlugs()
    .map((slug) => loadPost(slug))
    .sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime())
    .map((post) => {
      const { content: _content, ...summary } = post;
      void _content;
      return summary;
    });

export const getCategoryCounts = () => {
  const categories = new Map<string, { name: string; count: number }>();

  getAllPostSummaries().forEach((post) => {
    if (!post.category) return;
    const key = toSlug(post.category);
    const current = categories.get(key);
    categories.set(key, {
      name: post.category,
      count: current ? current.count + 1 : 1,
    });
  });

  return categories;
};

export const getTagCounts = () => {
  const tags = new Map<string, { name: string; count: number }>();

  getAllPostSummaries().forEach((post) => {
    post.tags?.forEach((tag) => {
      const key = toSlug(tag);
      const current = tags.get(key);
      tags.set(key, {
        name: tag,
        count: current ? current.count + 1 : 1,
      });
    });
  });

  return tags;
};
