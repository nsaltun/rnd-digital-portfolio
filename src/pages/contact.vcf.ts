import type { APIRoute } from "astro";
import { buildVCard } from "../utils/vcard";

export const GET: APIRoute = () => {
  return new Response(buildVCard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="rumaysa-nur-altun.vcf"',
    },
  });
};
