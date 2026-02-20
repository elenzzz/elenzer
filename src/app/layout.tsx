import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ElenzerVisuals",
  description:
    "Creative video editing portfolio of Elyana Elenzer. Showcasing a blend of cinematic storytelling and dynamic visuals. Explore my work and let's create something amazing together.",
  openGraph: {
    title: "ElenzerVisuals",
    description:
      "Creative video editing portfolio of Elyana Elenzer. Showcasing a blend of cinematic storytelling and dynamic visuals. Explore my work and let's create something amazing together.",
    type: "website",
    images: [
      {
        url: "https://www.elenzervisuals.com/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Next App",
    description:
      "Creative video editing portfolio of Elyana Elenzer. Showcasing a blend of cinematic storytelling and dynamic visuals. Explore my work and let's create something amazing together.",
    images: ["https://www.elenzervisuals.com/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
