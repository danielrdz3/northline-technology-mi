import type { MetadataRoute } from "next";

const base = "https://northline-technology-mi.d1rk-digglers.chatgpt.site";
const serviceSlugs = ["managed-it-michigan", "cloud-migration-michigan", "cybersecurity-michigan", "backup-recovery-michigan", "help-desk-michigan", "voice-collaboration-michigan"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, ...serviceSlugs.map((slug) => ({ url: `${base}/services/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }))];
}
