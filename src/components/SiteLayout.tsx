import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { Locale, getLocalizedPath, uiTexts } from "../lib/uiTexts";

type SiteLayoutProps = {
  children: React.ReactNode;
  locale: Locale;
};

export function SiteLayout({ children, locale }: SiteLayoutProps) {
  const texts = uiTexts[locale];
  const year = new Date().getFullYear();

  return (
    <div
      lang={locale}
      className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]"
    >
      <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-white/90 backdrop-blur-md shadow-sm transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            href={getLocalizedPath(locale)}
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Logo locale={locale} />
          </Link>
          <div className="flex items-center gap-6 md:gap-8">
            <nav className="hidden items-center gap-8 text-base font-medium text-slate-600 md:flex">
              <Link
                href={getLocalizedPath(locale, "/knm")}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {texts.nav.knm}
              </Link>
              <Link
                href={getLocalizedPath(locale, "/society")}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {texts.nav.society}
              </Link>
              <Link
                href={getLocalizedPath(locale, "/life")}
                className="hover:text-[var(--primary)] transition-colors opacity-80"
              >
                {texts.nav.life}
              </Link>
              <Link
                href={getLocalizedPath(locale, "/resources")}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {texts.nav.resources}
              </Link>
              <Link
                href={getLocalizedPath(locale, "/about")}
                className="hover:text-[var(--primary)] transition-colors font-bold text-[var(--primary)] opacity-90"
              >
                {texts.nav.about}
              </Link>
            </nav>
            <div className="pl-2 border-l border-slate-200">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-10">{children}</div>
      </main>

      <footer className="border-t border-[var(--border-subtle)] bg-white text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
             <span className="font-bold text-slate-700">open-knm</span>
             <span className="h-3 w-[1px] bg-slate-300"></span>
             <span>{texts.footer.tagline}</span>
          </div>
          <p className="text-slate-400">{texts.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
