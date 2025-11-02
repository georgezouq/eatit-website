import Link from "next/link";

import type { CategoryWithCount } from "@/lib/blog/types";

type CategoryProps = {
  categories: CategoryWithCount[];
  activeSlug: string;
};

const Category = ({ categories, activeSlug }: CategoryProps) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="blog-category mt-60 lg-mt-40">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="style-none">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/blogs?category=${category.slug}`}
              className={activeSlug === category.slug ? "active" : ""}
            >
              {category.name} <span>({category.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
