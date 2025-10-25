import FancyBanner from "@/components/homes/home-2/FancyBanner"
import ProjectSixArea from "./ProjectSixArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const ProjectSix = () => {
  return (
    <div className="main-page-wrapper dark-bg-two">
      <HeaderTwo />
      <ProjectSixArea />
      <FancyBanner />
      <FooterTwo />
    </div>
  )
}

export default ProjectSix
