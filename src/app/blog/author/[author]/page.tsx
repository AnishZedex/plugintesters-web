import { SanityDocument } from "@sanity/client";
import { PluginBlogs, TutorialBlogs, authorPathQuery, blogByAuthors, catergoriesQuery, siteConfigQuery} from "../../../../store/queries";
import Navbar from "../../../../components/Navbar"
import FooterCopywrite from "../../../../components/Footer";
import Footersocial from "../../../../components/Footer/footersocial";
import Newsletter from "../../../../components/Footer/Newsletter";
import { cachedClient } from "../../../../../sanity/lib/client";
import Author from "@/components/Author";



export async function generateStaticParams() {
    const categories = await cachedClient(authorPathQuery);
    return categories;
}

export default async function Page({ params }: { params: any }) {
  const categories = await cachedClient(catergoriesQuery)
  const PluginCategory = await cachedClient(PluginBlogs)
  const TutorialCategory = await cachedClient(TutorialBlogs)
  const blogs = await cachedClient<SanityDocument[]>(blogByAuthors,{slug:params.author})
  const siteConfig = await cachedClient(siteConfigQuery)
  
  return(
    <>
      <Navbar category={categories} PlugCategory={PluginCategory} TutCategory={TutorialCategory} siteConfig={siteConfig}/>
      <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
      <Author siteConfig={siteConfig} blogs={blogs}/>
      </div>
      <Footersocial/>
      <Newsletter/>
      <FooterCopywrite />
    </>
  );
}