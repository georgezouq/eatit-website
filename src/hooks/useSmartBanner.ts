"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "smartBannerDismissed";
const DEFAULT_APP_ID = "6753906159";

interface UseSmartBannerOptions {
  appId?: string;
}

interface UseSmartBannerReturn {
  shouldShow: boolean;
  dismiss: () => void;
  appStoreUrl: string;
}

/**
 * Hook to manage Smart Banner display logic
 * 
 * Features:
 * - Only shows on iOS Safari (not in WebView or other environments)
 * - Remembers dismissal state in localStorage
 * - Provides App Store URL
 */
export function useSmartBanner({ 
  appId = DEFAULT_APP_ID 
}: UseSmartBannerOptions = {}): UseSmartBannerReturn {
  const [shouldShow, setShouldShow] = useState(false);

  const appStoreUrl = `https://apps.apple.com/app/id${appId}`;

  useEffect(() => {
    // Check if running in browser
    if (typeof window === "undefined") {
      return;
    }

    // Check if already dismissed
    const isDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    if (isDismissed) {
      return;
    }

    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/crios|fxios|edgios/.test(userAgent);
    
    // Check if it's not in a WebView or standalone mode
    // iOS Safari specific property
    const isStandalone = "standalone" in window.navigator && 
      (window.navigator as { standalone?: boolean }).standalone === true;
    const isWebView = /(WebView|wv)/.test(userAgent);

    // Only show on iOS Safari, not in WebView or standalone mode
    if (isIOS && isSafari && !isStandalone && !isWebView) {
      setShouldShow(true);
    }
  }, []);

  const dismiss = () => {
    setShouldShow(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  return {
    shouldShow,
    dismiss,
    appStoreUrl,
  };
}

