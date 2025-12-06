import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Bir Mehto | Portfolio",
    template: "%s | Bir Mehto"
  },
  description: "Modern portfolio of Bir Mehto - Flutter Developer specializing in mobile app development.",
  keywords: ["Bir Mehto", "Flutter Developer", "Mobile App Developer", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Bir Mehto" }],
  creator: "Bir Mehto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://birmehto.dev",
    title: "Bir Mehto | Portfolio",
    description: "Modern portfolio of Bir Mehto - Flutter Developer",
    siteName: "Bir Mehto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bir Mehto | Portfolio",
    description: "Modern portfolio of Bir Mehto - Flutter Developer",
    creator: "@birmehto",
  },
};

import Providers from "@/components/providers/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
