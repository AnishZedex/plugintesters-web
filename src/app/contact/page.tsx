import { cachedClient } from "../../../sanity/lib/client"
import { PluginBlogs, TutorialBlogs, catergoriesQuery, postsQuery, siteConfigQuery } from "../../../queries"
import Navbar from "@/components/Navbar"
import Footersocial from "@/components/Footer/footersocial"
import Newsletter from "@/components/Footer/Newsletter"
import FooterCopywrite from "@/components/Footer"
import ContactUs from "../ContactUs"

export default async function Page(){
    
    const categories = await cachedClient(catergoriesQuery)
    const PluginCategory = await cachedClient(PluginBlogs)
    const TutorialCategory = await cachedClient(TutorialBlogs)
    const siteConfig = await cachedClient(siteConfigQuery)
    return(
        <>
      <Navbar category={categories} PlugCategory={PluginCategory} TutCategory={TutorialCategory}siteConfig={siteConfig}/>
        <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
          <ContactUs siteConfig={siteConfig}/>
        </div>
        <Footersocial/>
        <Newsletter/>
      <FooterCopywrite/>
    </>
    )
}