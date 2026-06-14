"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/data/siteContent";

const localeStorageKey = "kanako-nakai-locale";

function isLocale(value: string | null): value is Locale {
  return value === "ja" || value === "en";
}

export function localeHref(path: string, locale: Locale) {
  const [pathname, hash] = path.split("#");
  const separator = pathname.includes("?") ? "&" : "?";
  const localizedPath = `${pathname}${separator}lang=${locale}`;

  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export function useLocalePreference(defaultLocale: Locale = "en") {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const urlLocale = new URLSearchParams(window.location.search).get("lang");
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    const preferredLocale = isLocale(urlLocale)
      ? urlLocale
      : isLocale(storedLocale)
        ? storedLocale
        : defaultLocale;

    setLocaleState(preferredLocale);
    window.localStorage.setItem(localeStorageKey, preferredLocale);
  }, [defaultLocale]);

  useEffect(() => {
    document.documentElement.lang = locale === "ja" ? "ja" : "en";
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
  }, []);

  return [locale, setLocale] as const;
}
