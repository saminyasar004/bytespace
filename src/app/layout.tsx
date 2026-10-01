import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Learn skills that move your career",
    template: "%s | ByteSpace",
  },
  description:
    "Get access to hundreds of courses. Unlock your creativity, gain valuable knowledge and grow your business with ByteSpace.",
  icons: [{ rel: "icon", url: "/assets/bytespace-favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
