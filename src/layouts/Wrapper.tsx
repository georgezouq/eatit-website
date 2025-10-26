/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
// import LightSwitcher from "@/components/common/LightSwitcher";

const Wrapper = ({ children }: any) => {

    return <>
        {children}
        <ScrollToTop />
        {/* <LightSwitcher /> */}
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
