"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import shape_1 from "@/assets/images/shape/shape_10.svg"

import icon_w1 from "@/assets/images/icon/icon_08_w.svg"
import icon_w2 from "@/assets/images/icon/icon_09_w.svg"
import icon_w3 from "@/assets/images/icon/icon_10_w.svg"
import icon_w4 from "@/assets/images/icon/icon_11_w.svg"
import icon_w5 from "@/assets/images/icon/icon_12_w.svg"
import icon_w6 from "@/assets/images/icon/icon_13_w.svg"

import img_1 from "@/assets/images/assets/ils_05.svg"

interface TavTitle {
   id: number;
   icon_white: StaticImageData;
   title: string;
}

const title_data: TavTitle[] = [
   {
      id: 1,
      icon_white: icon_w1,
      title: "Complete Sentence Re-construct"
   },
   {
      id: 2,
      icon_white: icon_w2,
      title: "Improve Quality"
   },
   {
      id: 3,
      icon_white: icon_w3,
      title: "Alternative Sentence Generate"
   },
   {
      id: 4,
      icon_white: icon_w4,
      title: "Enrich Text"
   },
   {
      id: 5,
      icon_white: icon_w5,
      title: "AI pilot for article writing"
   },
   {
      id: 6,
      icon_white: icon_w6,
      title: "Split Sentences"
   },
];

const img_data: StaticImageData[] = [img_1, img_1, img_1, img_1, img_1, img_1]

const BLockFeatureTwo = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <div className="block-feature-five position-relative z-1 pt-150 lg-pt-80">
         <Image src={shape_1} alt="Decorative graphic" className="shapes shape_01" />
         <div className="container">
            <div className="title-two text-center mb-100 xl-mb-70 lg-mb-50">
               <h2>What Is PikuAi Capable Of?</h2>
            </div>
            <div className="feature-tab">
               <nav className="filter-nav">
                  <div className="nav nav-tabs align-items-center justify-content-center border-0" role="tablist">
                     {title_data.map((item, index) => (
                        <button onClick={() => handleTabClick(index)} key={item.id} className={`nav-link ${activeTab === index ? "active" : ""}`}>
                           <Image src={item.icon_white} alt="Decorative graphic" className="shapes icon" />
                           {item.title}
                        </button>
                     ))}
                  </div>
               </nav>
               <div className="mt-70 xl-mt-50">
                  <div className="tab-content">
                     {img_data.map((img, index) => (
                        <div key={index} className={`tab-pane show ${activeTab === index ? "active" : ""}`}>
                           <Image src={img} alt="Decorative graphic" className="w-100" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
