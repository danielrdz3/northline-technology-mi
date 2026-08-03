import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northline Technology | Managed IT Services in Michigan",
  description: "Managed IT, cybersecurity, cloud, support, and technology strategy for Michigan businesses.",
  metadataBase: new URL("https://northline-technology.example"),
  openGraph: { title: "Northline Technology", description: "Managed IT. Clear business outcomes.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Northline Technology", description: "Managed IT. Clear business outcomes.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
