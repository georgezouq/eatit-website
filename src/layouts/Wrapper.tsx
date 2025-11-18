"use client";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import { CustomSmartBanner } from "@/components/common/CustomSmartBanner";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { ReactNode } from "react";
// import LightSwitcher from "@/components/common/LightSwitcher";

interface WrapperProps {
    children: ReactNode;
    dictionary?: LocaleDictionary;
}

const Wrapper = ({ children, dictionary }: WrapperProps) => {
    console.log('[Wrapper] Rendering with dictionary:', !!dictionary);
    
    return <>
        {dictionary && <CustomSmartBanner dictionary={dictionary} />}
        {children}
        <ScrollToTop />
        {/* <LightSwitcher /> */}
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
