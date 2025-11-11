"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "next/navigation";

import paginate_icon from "@/assets/images/icon/icon_15.svg";
import Sidebar from "../sidebar";
import type {
  CategoryWithCount,
  PostSummary,
  TagWithCount,
} from "@/lib/blog/types";
import { normalizeForComparison } from "@/lib/blog/slug";

type BlogTwoAreaProps = {
  posts: PostSummary[];
  categories: CategoryWithCount[];
  tags: TagWithCount[];
  recentPosts: PostSummary[];
};

const BlogTwoArea = ({ posts, categories, tags, recentPosts }: BlogTwoAreaProps) => {
  const searchParams = useSearchParams();
  const itemsPerPage = 4;
  const [itemOffset, setItemOffset] = useState(0);

  const activeCategory = normalizeForComparison(searchParams.get("category"));
  const activeTag = normalizeForComparison(searchParams.get("tag"));

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory
        ? normalizeForComparison(post.category) === activeCategory
        : true;
      const matchesTag = activeTag
        ? post.tags?.some((tag) => normalizeForComparison(tag) === activeTag)
        : true;

      return matchesCategory && matchesTag;
    });
  }, [posts, activeCategory, activeTag]);

  useEffect(() => {
    setItemOffset(0);
  }, [activeCategory, activeTag]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredPosts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredPosts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % Math.max(filteredPosts.length, 1);
    setItemOffset(newOffset);
  };

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));

  return (
    <div className="blog-section-two mt-200 lg-mt-150 mb-120 lg-mb-80">
      <div className="container">
        <div className="title-two text-center mb-80 lg-mb-50">
          <h1 className="mb-30">Eatibo Blog</h1>
          <p className="text-lg mx-auto text-white-50" style={{ maxWidth: "700px", fontSize: "1.05rem", lineHeight: "1.7" }}>
            Discover expert insights on AI-powered hair styling, trending hairstyles, and professional beauty tips.
          </p>
        </div>

        <div className="row">
          <div className="col-xxl-11 m-auto">
            <div className="row gx-xxl-5">
              <div className="col-lg-8">
                {currentItems.length === 0 ? (
                  <p className="text-center text-white-50">
                    We&apos;re crafting new stories for this topic. Try a different filter or
                    reset the search to explore the latest insights.
                  </p>
                ) : (
                  currentItems.map((item) => (
                    <article key={item.slug} className="blog-meta-two mb-90 lg-mb-50">
                      <figure
                        className="media position-relative"
                        style={{ backgroundImage: `url(${item.coverImage})` }}
                      >
                        <Link
                          href={`/posts/${item.slug}`}
                          className="stretched-link date tran3s"
                        >
                          {formatDate(item.date)}
                        </Link>
                      </figure>
                      <div className="post-meta">
                        <div className="post-info mb-3">
                          {item.author.name} · {item.readingTimeMinutes} min read
                          {item.category && (
                            <span className="ms-3 text-primary">
                              <i className="bi bi-folder me-1"></i>
                              {item.category}
                            </span>
                          )}
                        </div>
                        <div className="d-flex justify-content-between align-items-start flex-wrap">
                          <div className="flex-grow-1 pe-3">
                            <Link href={`/posts/${item.slug}`} className="blog-title">
                              <h2 className="h4">{item.title}</h2>
                            </Link>
                            <p className="mt-20 mb-20 text-white-50" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                              {item.excerpt}
                            </p>
                            {item.tags && item.tags.length > 0 && (
                              <div className="d-flex flex-wrap gap-2 mt-3">
                                {item.tags.slice(0, 4).map((tag) => (
                                  <span 
                                    key={tag} 
                                    className="badge bg-secondary text-white-50"
                                    style={{ fontSize: "0.85rem", fontWeight: "400" }}
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <Link
                              href={`/posts/${item.slug}`}
                              className="btn-link text-primary mt-3 d-inline-block"
                              style={{ fontSize: "0.95rem" }}
                            >
                              Read full article <i className="bi bi-arrow-right ms-1"></i>
                            </Link>
                          </div>
                          <Link
                            href={`/posts/${item.slug}`}
                            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s flex-shrink-0"
                            aria-label={`Read ${item.title}`}
                          >
                            <i className="bi bi-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                )}

                {pageCount > 1 && (
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel={<Image src={paginate_icon} alt="Next page" className="ms-2" />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<Image src={paginate_icon} alt="Previous page" className="ms-2" />}
                    renderOnZeroPageCount={null}
                    className="pagination-one d-flex align-items-center style-none pt-10"
                    forcePage={Math.floor(itemOffset / itemsPerPage)}
                  />
                )}
              </div>
              <Sidebar
                categories={categories}
                tags={tags}
                recentPosts={recentPosts}
                activeCategory={activeCategory}
                activeTag={activeTag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTwoArea;
