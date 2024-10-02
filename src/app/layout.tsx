import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { data } from "@/data/resume";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: data.name,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.name,
    description: data.summary,
    url: data.url,
    images: [
      {
        url: data.avatar.url,
        alt: data.avatar.alt,
      },
    ],
    type: "article",
    authors: [data.name],
  },
  twitter: {
    card: "summary_large_image",
    title: data.name,
    description: data.summary,
    images: [data.avatar.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
