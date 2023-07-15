import { SanityDocument } from "@sanity/client";
import { PluginBlogs, blogByCategory, categoriesPathQuery, categoryQuery, catergoriesQuery, postPathsQuery, postQuery } from "../../../../../queries";
import Navbar from "../../../../components/Navbar"
import Category from "../../../Category"
import FooterCopywrite from "../../../../components/Footer";
import Footersocial from "../../../../components/Footer/footersocial";
import Newsletter from "../../../../components/Footer/Newsletter";
import OrangeRibbon from "../../../../components/OrangeRibbon";
import { cachedClient } from "../../../../../sanity/lib/client";


export async function generateStaticParams() {
    const categories = await cachedClient(categoriesPathQuery);
    return categories;
}

export default async function Page({ params }: { params: any }) {
  const categories = await cachedClient(catergoriesQuery)
  const PluginCategory = await cachedClient(PluginBlogs)
  const blogs = await cachedClient<SanityDocument[]>(blogByCategory,{slug:params.category})
  
  return(
    <>
      <Navbar category={categories} PlugCategory={PluginCategory}/>
      <div className="container mx-auto px-6 lg:px-52">
      <Category blogs={blogs}/>
      </div>
      <Footersocial/>
      <Newsletter/>
      <FooterCopywrite />
    </>
  );
}