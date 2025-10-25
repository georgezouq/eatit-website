import FancyBanner from "@/components/homes/home-2/FancyBanner"
import BlogTwoArea from "./BlogTwoArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const BlogTwo = () => {
  return (
    <div className="main-page-wrapper dark-bg-two">
      <HeaderTwo />
      <BlogTwoArea />
      <FancyBanner />
      <FooterTwo />
    </div>
  )
}

export default BlogTwo
