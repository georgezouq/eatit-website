"use client"
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   // useEffect(() => {
   //    window.addEventListener("scroll", checkScrollTop);
   //    return () => window.removeEventListener("scroll", checkScrollTop);
   // }, []);
   useEffect(() => {
      const handleScroll = () => {
         if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
         } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [showScroll]);

   return (
      <>
         <div onClick={scrollTop} className={`scroll-top ${sticky ? "active" : ""}`}>
            <i className="bi bi-arrow-up-short"></i>
         </div>
      </>
   )
}

export default ScrollToTop
