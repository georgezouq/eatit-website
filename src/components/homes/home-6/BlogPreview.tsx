import Image from "next/image";
import Link from "next/link";

import shape from "@/assets/images/shape/shape_60.svg";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category?: string;
  readingTimeMinutes: number;
};

type BlogPreviewProps = {
  posts: BlogPost[];
};

const BlogPreview = ({ posts }: BlogPreviewProps) => {
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));

  return (
    <div className="blog-preview-section position-relative z-1 mt-150 lg-mt-100 mb-150 lg-mb-100">
      <div className="container">
        <div className="row align-items-center mb-70 lg-mb-40">
          <div className="col-lg-6">
            <div className="title-four">
              <h2 className="fw-bold">Latest Insights</h2>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end">
            <Link 
              href="/blogs" 
              className="btn-seven color-two mt-10"
            >
              View All Articles <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>

        <div className="row gx-xxl-5">
          {posts.slice(0, 3).map((post, index) => (
            <div key={post.slug} className="col-lg-4 col-md-6 mb-40 lg-mb-30">
              <article 
                className="blog-card-home h-100 position-relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link href={`/posts/${post.slug}`} className="image-wrapper position-relative d-block overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={280}
                    className="w-100 tran4s"
                    style={{ 
                      objectFit: "cover", 
                      aspectRatio: "4/3",
                      borderRadius: "12px"
                    }}
                  />
                  <div className="date-badge position-absolute">
                    {formatDate(post.date)}
                  </div>
                </Link>
                
                <div className="post-content mt-30">
                  {post.category && (
                    <div className="category-tag mb-15">
                      <span className="text-primary text-uppercase" style={{ fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.5px" }}>
                        {post.category}
                      </span>
                    </div>
                  )}
                  
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="post-title mb-20 fw-bold" style={{ fontSize: "1.35rem", lineHeight: "1.4" }}>
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="post-excerpt text-white-50 mb-25" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
                  </p>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="reading-time text-white-50" style={{ fontSize: "0.85rem" }}>
                      <i className="bi bi-clock me-1"></i>
                      {post.readingTimeMinutes} min read
                    </span>
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="read-more-link text-primary d-flex align-items-center"
                      style={{ fontSize: "0.9rem", fontWeight: "500" }}
                    >
                      Read More <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      
      <Image 
        src={shape} 
        alt="Decorative shape" 
        className="shapes shape-one" 
        style={{ opacity: 0.3 }}
      />
    </div>
  );
};

export default BlogPreview;

