import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "PT ALIM RUGI TEKNOLOGI - Solusi Digital Terpercaya di Indonesia",
  description: "PT ALIM RUGI TEKNOLOGI adalah mitra digital terpercaya yang menyediakan solusi website, aplikasi mobile, dan digitalisasi bisnis yang inovatif, cepat, dan terjangkau untuk membantu transformasi digital bisnis Anda.",
  keywords: "alim rugi teknologi, web development, mobile app, desain grafis, AI, pelatihan IT, digitalisasi bisnis, solusi digital, transformasi digital, jasa pembuatan website, jasa pembuatan aplikasi, konsultan IT, pelatihan teknologi",
  authors: [{ name: "PT ALIM RUGI TEKNOLOGI" }],
  creator: "PT ALIM RUGI TEKNOLOGI",
  publisher: "PT ALIM RUGI TEKNOLOGI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alimrugi.id",
    siteName: "PT ALIM RUGI TEKNOLOGI",
    title: "PT ALIM RUGI TEKNOLOGI - Solusi Digital Terpercaya di Indonesia",
    description: "Transformasi digital bisnis Anda dengan solusi website, aplikasi mobile, dan digitalisasi yang inovatif dari PT ALIM RUGI TEKNOLOGI.",
    images: [
      {
        url: "/main-logo.webp",
        width: 1200,
        height: 630,
        alt: "PT ALIM RUGI TEKNOLOGI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT ALIM RUGI TEKNOLOGI - Solusi Digital Terpercaya",
    description: "Transformasi digital bisnis Anda dengan solusi website, aplikasi mobile, dan digitalisasi yang inovatif.",
    images: ["/main-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
