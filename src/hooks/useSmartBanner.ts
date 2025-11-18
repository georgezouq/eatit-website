"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "eatibo-smart-banner-dismissed";
const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
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
 * Only shows on iOS Safari (not in WebView or other browsers)
 */
export function useSmartBanner(
  options: UseSmartBannerOptions = {}
): UseSmartBannerReturn {
  const [shouldShow, setShouldShow] = useState(false);
  const appId = options.appId || DEFAULT_APP_ID;
  const appStoreUrl = `https://apps.apple.com/app/id${appId}`;

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") {
      return;
    }

    // Check if banner was dismissed recently
    const dismissedAt = localStorage.getItem(STORAGE_KEY);
    if (dismissedAt) {
      const dismissedTime = parseInt(dismissedAt, 10);
      if (Date.now() - dismissedTime < DISMISS_DURATION) {
        console.log('[SmartBanner] Recently dismissed, not showing');
        setShouldShow(false);
        return;
      }
    }

    // Detect iOS
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    if (!isIOS) {
      console.log('[SmartBanner] Not iOS device');
      setShouldShow(false);
      return;
    }

    // Check if we're in Safari (not WebView or other browsers)
    const isSafari = /Safari/.test(navigator.userAgent);
    const isWebView =
      /(WebView|wv|FBAN|FBAV|Instagram|Line|Twitter|WeChat|MicroMessenger|QQ)/i.test(
        navigator.userAgent
      );
    const isChrome = /CriOS/.test(navigator.userAgent);
    const isFirefox = /FxiOS/.test(navigator.userAgent);

    // Debug logging
    console.log('[SmartBanner] Detection:', {
      isIOS,
      isSafari,
      isWebView,
      isChrome,
      isFirefox,
      userAgent: navigator.userAgent,
      shouldShow: isSafari && !isWebView && !isChrome && !isFirefox
    });

    // Only show in Safari, not in WebView or other browsers
    if (isSafari && !isWebView && !isChrome && !isFirefox) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setShouldShow(false);
  };

  return {
    shouldShow,
    dismiss,
    appStoreUrl,
  };
}

