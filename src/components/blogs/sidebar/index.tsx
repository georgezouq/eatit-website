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

type SidebarProps = {
  categories: CategoryWithCount[];
  tags: TagWithCount[];
  recentPosts: PostSummary[];
  activeCategory: string;
  activeTag: string;
};

const Sidebar = ({ categories, tags, recentPosts, activeCategory, activeTag }: SidebarProps) => {
  return (
    <div className="col-lg-4">
      <aside className="hairwow-blog-sidebar blog-sidebar md-mt-60" aria-label="Blog sidebar">
        <form onSubmit={(e) => e.preventDefault()} className="sidebar-search">
          <input type="text" placeholder="Search.." aria-label="Search blog articles" />
          <button className="tran3s" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <Category categories={categories} activeSlug={activeCategory} />
        <RecentNews posts={recentPosts} />

        <Tags tags={tags} activeSlug={activeTag} />
        <div className="contact-banner text-center mt-50 lg-mt-30">
          <h3 className="mb-20">
            Any Questions? <br />Let’s talk
          </h3>
          <Link href="/contact" className="tran3s fw-500">
            Let’s Talk
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
