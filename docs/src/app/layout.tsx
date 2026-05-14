import { baseUrl } from "@/lib/metadata";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Provider } from "./provider";
import "./globals.css";

const appleTouchIconUrl = "https://cocoon.org/img/cocoon-apple-touch-icon.png";
const favicon32Url = "https://cocoon.org/img/cocoon-favicon-32x32.png";
const favicon16Url = "https://cocoon.org/img/cocoon-favicon-16x16.png";
const faviconIcoUrl = "https://cocoon.org/img/cocoon-favicon.ico";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "COCOON Docs",
    template: "%s | COCOON Docs",
  },
  description: "Technical documentation for COCOON.",
  icons: {
    icon: [
      { url: favicon32Url, type: "image/png", sizes: "32x32" },
      { url: favicon16Url, type: "image/png", sizes: "16x16" },
    ],
    shortcut: [{ url: faviconIcoUrl, type: "image/x-icon" }],
    apple: [{ url: appleTouchIconUrl, sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
