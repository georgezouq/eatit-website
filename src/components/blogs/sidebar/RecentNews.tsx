import Link from "next/link";

import type { PostSummary } from "@/lib/blog/types";

type RecentNewsProps = {
  posts: PostSummary[];
};

const RecentNews = ({ posts }: RecentNewsProps) => {
  if (posts.length === 0) {
    return null;
  }

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(date));

  return (
    <div className="blog-recent-news mt-60 lg-mt-40">
      <h3 className="sidebar-title">Latest Articles</h3>
      {posts.slice(0, 3).map((post) => (
        <article key={post.slug} className="recent-news">
          <div className="post-data">
            <div className="date">{formatDate(post.date)}</div>
            <Link href={`/posts/${post.slug}`} className="blog-title">
              <h3>{post.title}</h3>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default RecentNews;
