import type { MetadataRoute } from "next";
import { locationServices } from "@/lib/location-services";
import { michiganCities, slugify } from "@/lib/locations";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://northline-technology-mi.d1rk-digglers.chatgpt.site";
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const services = locationServices.map((service)=>({url:`${base}/${service.slug}`,lastModified:updated,changeFrequency:"monthly" as const,priority:.85}));
  const cities = locationServices.flatMap((service)=>michiganCities.map((city)=>({url:`${base}/${service.slug}/${service.slug.replace(/-michigan$/,"")}-${slugify(city)}-michigan/`,lastModified:updated,changeFrequency:"monthly" as const,priority:.7})));
  return [{url:base,lastModified:updated,changeFrequency:"monthly",priority:1},...services,...cities];
}
