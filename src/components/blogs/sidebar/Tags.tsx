import Link from "next/link";

import type { TagWithCount } from "@/lib/blog/types";

type TagsProps = {
  tags: TagWithCount[];
  activeSlug: string;
};

const Tags = ({ tags, activeSlug }: TagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="blog-keyword mt-60 lg-mt-40">
      <h3 className="sidebar-title">Keywords</h3>
      <ul className="style-none d-flex flex-wrap">
        {tags.map((tag) => (
          <li key={tag.slug}>
            <Link
              href={`/blogs?tag=${tag.slug}`}
              className={activeSlug === tag.slug ? "active" : ""}
            >
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
