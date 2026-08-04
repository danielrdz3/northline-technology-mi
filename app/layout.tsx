import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Managed IT Services in Michigan | Northline Technology",
  description: "Managed IT services in Michigan with cybersecurity, cloud migration, help desk, backup and recovery, and strategic technology guidance.",
  metadataBase: new URL("https://northline-technology-mi.d1rk-digglers.chatgpt.site"),
  alternates: { canonical: "/" },
  openGraph: { title: "Managed IT Services in Michigan | Northline Technology", description: "Reliable managed IT, cybersecurity, cloud, and support for Michigan businesses.", url: "/", siteName: "Northline Technology", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Managed IT Services in Michigan | Northline Technology", description: "Reliable managed IT, cybersecurity, cloud, and support for Michigan businesses.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Northline Technology", url: "https://northline-technology-mi.d1rk-digglers.chatgpt.site", email: "hello@northlinetechnology.com", areaServed: { "@type": "State", name: "Michigan" }, description: "Managed IT services, cybersecurity, cloud migration, support, and technology strategy for Michigan businesses." };
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />{children}</body></html>;
}
