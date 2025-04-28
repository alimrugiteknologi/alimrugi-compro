import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT ALIM RUGI TEKNOLOGI - Solusi Digital Terpercaya",
  description: "PT ALIM RUGI TEKNOLOGI adalah mitra digital Anda untuk solusi website, aplikasi, dan digitalisasi yang inovatif, cepat, dan terjangkau.",
  keywords: "alim rugi teknologi, web development, mobile app, desain grafis, AI, pelatihan IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
