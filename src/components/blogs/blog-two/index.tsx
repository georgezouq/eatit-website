import { Suspense } from "react";
import FancyBanner from "@/components/homes/home-2/FancyBanner";
import BlogTwoArea from "./BlogTwoArea";
import BlogLayout from "../BlogLayout";
import type {
  CategoryWithCount,
  PostSummary,
  TagWithCount,
} from "@/lib/blog/types";
import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type BlogTwoProps = {
  locale: Locale;
  dictionary: LocaleDictionary;
  posts: PostSummary[];
  categories: CategoryWithCount[];
  tags: TagWithCount[];
  recentPosts: PostSummary[];
  onLocaleChange?: (locale: Locale) => void;
};

const BlogTwo = ({
  locale,
  dictionary,
  posts,
  categories,
  tags,
  recentPosts,
  onLocaleChange,
}: BlogTwoProps) => {
  return (
    <BlogLayout locale={locale} dictionary={dictionary} onLocaleChange={onLocaleChange}>
      <Suspense fallback={
        <div className="blog-section-two mt-200 lg-mt-150 mb-120 lg-mb-80">
          <div className="container">
            <div className="title-two text-center mb-80 lg-mb-50">
              <h2>EatIt Blog</h2>
            </div>
            <div className="text-center text-white-50">Loading...</div>
          </div>
        </div>
      }>
        <BlogTwoArea
          posts={posts}
          categories={categories}
          tags={tags}
          recentPosts={recentPosts}
        />
      </Suspense>
      <FancyBanner />
    </BlogLayout>
  );
};

export default BlogTwo;
