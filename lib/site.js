// Set NEXT_PUBLIC_SITE_URL in .env.local / hosting settings to the live domain,
// e.g. NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://drsalamahanif.vercel.app/").replace(/\/$/, "");
export const CITY = "Raebareli";
export const DOCTOR_IMG =
  "https://plain-apac-prod-public.komododecks.com/202611/16/VKuscGrJVlV1QXuNCOud/image.png";
export const CLINIC_GEO = { lat: 26.2120761, lng: 81.2596859 };
