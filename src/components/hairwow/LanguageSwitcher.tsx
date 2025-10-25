"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { localeLabels, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  onSelect?: () => void;
};

const LanguageSwitcher = ({ currentLocale, label, onSelect }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const options = useMemo(
    () =>
      locales.map((locale) => ({
        value: locale,
        label: localeLabels[locale],
        active: locale === currentLocale,
      })),
    [currentLocale]
  );

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const buildNextPath = useCallback(
    (locale: Locale) => {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length === 0) {
        segments.push(locale);
      } else {
        segments[0] = locale;
      }
      return `/${segments.join("/")}`;
    },
    [pathname]
  );

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === currentLocale) {
        closeMenu();
        return;
      }

      const nextPath = buildNextPath(nextLocale);
      closeMenu();
      onSelect?.();
      router.push(nextPath);
    },
    [buildNextPath, closeMenu, currentLocale, onSelect, router]
  );

  useEffect(() => {
    if (open) {
      setRenderMenu(true);
    }
    const timeout = open
      ? undefined
      : window.setTimeout(() => {
          setRenderMenu(false);
        }, 180);

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current) {
        return;
      }
      if (!containerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, open]);

  return (
    <div
      className={`hairwow-language${open ? " is-open" : ""}`}
      ref={containerRef}
      data-testid="hairwow-language-switcher"
    >
      <button
        type="button"
        className="hairwow-language__toggle"
        aria-label={label}
        aria-haspopup="listbox"
        aria-controls={menuId}
        aria-expanded={open}
        onClick={handleToggle}
      >
        <span className="hairwow-language__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3C7.029 3 3 7.029 3 12s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9Zm0 1.8c.933 0 2.272 1.848 2.772 5.4h-5.544c.5-3.552 1.839-5.4 2.772-5.4ZM5.1 12c0-1.155.273-2.241.753-3.2h3.435c-.165 1.017-.267 2.091-.288 3.2H5.1Zm0 1.8h3.9c.021 1.109.123 2.183.288 3.2H5.853A6.877 6.877 0 0 1 5.1 13.8Zm6.9 6.6c-.933 0-2.272-1.848-2.772-5.4h5.544c-.5 3.552-1.839 5.4-2.772 5.4Zm3.117-6.6c-.021-1.109-.123-2.183-.288-3.2h3.435a6.877 6.877 0 0 1 .753 3.2h-3.9Zm2.164-5a8.065 8.065 0 0 0-2.25-3.2 6.546 6.546 0 0 1 3.174 3.2h-0.924Zm-8.562 8.2c.368 1.803.963 3.255 1.602 4.188a6.48 6.48 0 0 1-3.165-4.188h1.563Zm5.358 4.188c.639-.933 1.234-2.385 1.602-4.188h1.563a6.48 6.48 0 0 1-3.165 4.188ZM8.679 5.6c-.639.933-1.234 2.385-1.602 4.188H5.514A6.48 6.48 0 0 1 8.679 5.6Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="hairwow-language__current">{localeLabels[currentLocale]}</span>
        <span className="hairwow-language__chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {renderMenu && (
        <ul
          id={menuId}
          className="hairwow-language__menu"
          role="listbox"
          aria-label={label}
          data-open={open}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.active}
                className={`hairwow-language__option${option.active ? " is-active" : ""}`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
