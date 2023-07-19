import  { groq } from "next-sanity";
import { cachedClient } from "./sanity/lib/client";

module.exports =  async function generateRedirects() {
  const query = groq`
    *[_type == 'redirect'] {
      destination,
      source,
      permanent
    }
  `;
  
  const redirects = await cachedClient(query);
  
  return redirects.map((redirect:any) => ({
    source: redirect.source,
    destination: redirect.destination,
    permanent: redirect.permanent,
  }));
};
