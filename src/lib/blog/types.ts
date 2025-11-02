export type BlogAuthor = {
  name: string;
  role?: string;
  picture?: string;
};

export type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags?: string[];
  category?: string;
  author: BlogAuthor;
  seoDescription?: string;
};

export type Post = PostFrontMatter & {
  slug: string;
  content: string;
  readingTimeMinutes: number;
};

export type PostSummary = Omit<Post, "content">;

export type PostWithHtml = Post & {
  contentHtml: string;
};

export type CategoryWithCount = {
  name: string;
  slug: string;
  count: number;
};

export type TagWithCount = {
  name: string;
  slug: string;
  count: number;
};
