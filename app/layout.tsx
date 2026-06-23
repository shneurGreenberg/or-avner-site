import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const aboutDescription =
  "Новосибирский еврейский лицей «ОР АВНЕР» — уникальное образовательное учреждение, где еврейские традиции сочетаются с современными образовательными стандартами.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.subtitle}`,
  description: aboutDescription,
  openGraph: {
    title: `${SITE.name} — ${SITE.subtitle}`,
    description: aboutDescription,
    locale: "ru_RU",
    type: "website",
    images: ["/images/hero-staircase.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.subtitle,
  alternateName: SITE.name,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "просп. Дзержинского, 1",
    addressLocality: "Новосибирск",
    addressCountry: "RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
