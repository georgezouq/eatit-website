"use client";

import Category from "./Category";
import RecentNews from "./RecentNews";
import Tags from "./Tags";
import Link from "next/link";
import type {
  CategoryWithCount,
  PostSummary,
  TagWithCount,
} from "@/lib/blog/types";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type SidebarProps = {
  categories: CategoryWithCount[];
  tags: TagWithCount[];
  recentPosts: PostSummary[];
  activeCategory: string;
  activeTag: string;
  dict: LocaleDictionary;
};

const Sidebar = ({ categories, tags, recentPosts, activeCategory, activeTag, dict }: SidebarProps) => {
  return (
    <div className="col-lg-3 col-xl-4 col-xxl-4">
      <aside className="hairwow-blog-sidebar blog-sidebar md-mt-60" aria-label="Blog sidebar">
        <form onSubmit={(e) => e.preventDefault()} className="sidebar-search">
          <input type="text" placeholder="Search.." aria-label="Search blog articles" />
          <button className="tran3s" aria-label="Search">
            <i className="bi bi-arrow-up-right"></i>
          </button>
        </form>
        <Category categories={categories} activeSlug={activeCategory} />
        <RecentNews posts={recentPosts} />

        <Tags tags={tags} activeSlug={activeTag} />
        <div className="contact-banner text-center mt-50 lg-mt-30">
          <h3 className="mb-20">
            {dict.blog.sidebar.downloadTitle}
          </h3>
          <Link href="/#download" className="tran3s fw-500">
            {dict.blog.sidebar.downloadCta}
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
