import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stripd — Wellness Dissolved",
  description: "The future of supplements is a strip on your tongue. No pills. No powders. No water. Just dissolve and go. 13 premium oral strip formulas by Stripd.",
  openGraph: {
    title: "Stripd — Wellness Dissolved",
    description: "13 premium oral strip formulas. No pills. No powders. Just dissolve and go.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="h-full antialiased text-[#FAFAFA] bg-[#000000]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
