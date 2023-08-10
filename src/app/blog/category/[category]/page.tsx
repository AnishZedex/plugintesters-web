import { SanityDocument } from "@sanity/client";
import { PluginBlogs, TutorialBlogs, blogByCategory, categoriesPathQuery, catergoriesQuery, siteConfigQuery } from "../../../../../queries";
import Navbar from "../../../../components/Navbar"
import Category from "../../../Category"
import FooterCopywrite from "../../../../components/Footer";
import Footersocial from "../../../../components/Footer/footersocial";
import Newsletter from "../../../../components/Footer/Newsletter";
import { cachedClient } from "../../../../../sanity/lib/client";


export async function generateStaticParams() {
    const categories = await cachedClient(categoriesPathQuery);
    return categories;
}

export default async function Page({ params }: { params: any }) {
  const categories = await cachedClient(catergoriesQuery)
  const TutorialCategory = await cachedClient(TutorialBlogs)
  const PluginCategory = await cachedClient(PluginBlogs)
  const blogs = await cachedClient<SanityDocument[]>(blogByCategory,{slug:params.category})
  const siteConfig = await cachedClient(siteConfigQuery)
  
  return(
    <>
      <Navbar category={categories} PlugCategory={PluginCategory} TutCategory={TutorialCategory} siteConfig={siteConfig}/>
      <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
      <Category blogs={blogs}/>
      </div>
      <Footersocial/>
      <Newsletter/>
      <FooterCopywrite />
    </>
  );
}