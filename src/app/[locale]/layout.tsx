import type { Metadata } from "next";
import "../globals.css";
import { locales, Locale } from "@/lib/i18n";
import { SiteLayout } from "@/components/SiteLayout";

const BASE_URL = 'https://open-knm.vercel.app'; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Open KNM - Dutch Society & Life Guide",
    template: "%s | Open KNM",
  },
  description: "Bilingual guide for living in the Netherlands and passing the KNM exam. Free, open-source, and community-driven.",
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    siteName: 'Open KNM',
    title: 'Open KNM - Dutch Society & Life Guide',
    description: 'Bilingual guide for living in the Netherlands and passing the KNM exam.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open KNM',
    description: 'Bilingual guide for living in the Netherlands and passing the KNM exam.',
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  // Validate locale or default to 'zh' if somehow invalid (though generateStaticParams prevents this for static export)
  const validLocale = (locales.includes(locale as Locale) ? locale : 'zh') as Locale;

  return (
    <html lang={validLocale}>
      <body className="antialiased min-h-screen flex flex-col">
        <SiteLayout locale={validLocale}>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
