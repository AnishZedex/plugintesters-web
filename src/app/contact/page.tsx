import { cachedClient } from "../../../sanity/lib/client"
import { PluginBlogs, TutorialBlogs, catergoriesQuery, postsQuery } from "../../../queries"
import Navbar from "@/components/Navbar"
import Searchbar from "@/components/Searchbar"
import Blogs from "@/components/Blogs"
import Card from "@/components/Card"
import Guide from "@/components/Guide"
import Footersocial from "@/components/Footer/footersocial"
import Newsletter from "@/components/Footer/Newsletter"
import FooterCopywrite from "@/components/Footer"
import ContactUs from "../ContactUs"

export default async function Page(){
    
    const categories = await cachedClient(catergoriesQuery)
    const PluginCategory = await cachedClient(PluginBlogs)
    return(
        <>
      <Navbar category={categories} PlugCategory={PluginCategory}/>
        <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
          <ContactUs/>
        </div>
        <Footersocial/>
        <Newsletter/>
      <FooterCopywrite/>
    </>
    )
}