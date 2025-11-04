import BlogLayout from "../BlogLayout";
import BlogDetailsArea from "./BlogDetailsArea";
import type { PostWithHtml, PostSummary, CategoryWithCount, TagWithCount } from "@/lib/blog/types";
import Sidebar from "../sidebar";
import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import { normalizeForComparison } from "@/lib/blog/slug";

type BlogDetailsProps = {
  locale: Locale;
  dictionary: LocaleDictionary;
  post: PostWithHtml;
  recentPosts: PostSummary[];
  categories: CategoryWithCount[];
  tags: TagWithCount[];
};

const BlogDetails = ({
  locale,
  dictionary,
  post,
  recentPosts,
  categories,
  tags,
}: BlogDetailsProps) => {
  return (
    <BlogLayout locale={locale} dictionary={dictionary}>
      <div className="blog-details mt-200 lg-mt-150 mb-120 lg-mb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 m-auto">
              <div className="row gx-xxl-5 gy-5 align-items-start">
                <div className="col-lg-8">
                  <BlogDetailsArea post={post} />
                </div>
                <Sidebar
                  categories={categories}
                  tags={tags}
                  recentPosts={recentPosts}
                  activeCategory={post.category ? normalizeForComparison(post.category) : ""}
                  activeTag=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogDetails;
