"use client";

import { useEffect } from "react";
import type { Locale } from "./config";

const LocaleProvider = ({ locale, children }: { locale: Locale; children: React.ReactNode }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
};

export default LocaleProvider;
