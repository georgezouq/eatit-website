import BlogForm from "@/components/forms/BlogForm";
import Image from "next/image";
import Link from "next/link";

import type { PostWithHtml } from "@/lib/blog/types";
import { normalizeForComparison } from "@/lib/blog/slug";

type BlogDetailsAreaProps = {
  post: PostWithHtml;
};

const BlogDetailsArea = ({ post }: BlogDetailsAreaProps) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  const shareUrl = encodeURIComponent(`https://hairwow.org/posts/${post.slug}`);

  return (
    <>
      <article className="blog-details-post">
        <div className="post-info text-center">
          {post.author.name} · {formattedDate} · {post.readingTimeMinutes} min read
        </div>
        <div className="title-three text-center mb-55 lg-mb-40">
          <h2>{post.title}</h2>
        </div>
        <div className="media">
          <Image
            src={post.coverImage}
            alt={post.title}
            className="w-100"
            width={1200}
            height={630}
            priority
          />
        </div>
        <div
          className="mt-50 blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="bottom-widget d-lg-flex align-items-center justify-content-between">
          <ul className="d-flex align-items-center flex-wrap tags style-none pt-20">
            <li style={{marginTop: '5px'}}>Tags</li>
            {post.tags?.map((tag) => (
              <li key={tag} style={{marginTop: '5px'}}>
                <Link href={`/blogs?tag=${normalizeForComparison(tag)}`}>{tag}</Link>
              </li>
            ))}
          </ul>
          <ul className="d-flex share-icon align-items-center style-none pt-20">
            <li>Share</li>
            <li>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Facebook"
              >
                <i className="bi bi-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on X"
              >
                <i className="bi bi-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </article>

      <BlogForm />
    </>
  );
};

export default BlogDetailsArea;
