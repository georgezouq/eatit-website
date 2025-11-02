import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/assets/ils_26.png"
import img_2 from "@/assets/images/shape/shape_93.svg"

import type { Locale } from "@/i18n/config"

type ErrorAreaProps = {
   title: string;
   description: string;
   backButton: string;
   locale: Locale;
}

const ErrorArea = ({ title, description, backButton, locale }: ErrorAreaProps) => {
   return (
      <div className="error-page border-30 z-1 pt-200 lg-pt-150 pb-150 lg-pb-100 mt-30 lg-mt-20 position-relative">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-7 col-sm-8">
                  <h2 className="text-white">404</h2>
                  <h3 className="text-white">{title}</h3>
                  <p className="fs-24 text-white-50 pe-xxl-5 mt-30 mb-35">{description}</p>

                  <Link href={`/${locale}`} className="btn-eighteen">{backButton}</Link>
               </div>
            </div>
         </div>
         <Image src={img_1} alt="Decorative graphic" className="illustration" />
         <Image src={img_2} alt="Decorative graphic" className="shapes shape_01" />
      </div>
   )
}

export default ErrorArea
