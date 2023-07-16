import { cachedClient } from "../../sanity/lib/client"
import { PluginBlogs, TutorialBlogs, catergoriesQuery, postsQuery } from "../../queries"
import Navbar from "@/components/Navbar"
import Searchbar from "@/components/Searchbar"
import Blogs from "@/components/Blogs"
import Card from "@/components/Card"
import Guide from "@/components/Guide"
import Footersocial from "@/components/Footer/footersocial"
import Newsletter from "@/components/Footer/Newsletter"
import FooterCopywrite from "@/components/Footer"


export default async function Home() {
  const posts = await cachedClient(postsQuery)
  const PluginCategory = await cachedClient(PluginBlogs)
  const categories = await cachedClient(catergoriesQuery)
  // const TutorialCategory = await cachedClient(TutorialBlogs)
  return (
    <>
      <Navbar category={categories} PlugCategory={PluginCategory}/>
        <div className="container mx-auto px-6 xl:px-52">
          <Searchbar/>
          <Blogs posts={posts} category={categories}/>
          <Card PluginCategory={PluginCategory}/>
          <Guide posts={posts}/>
        </div>
        <Footersocial/>
        <Newsletter/>
      <FooterCopywrite/>
    </>
  )
}
