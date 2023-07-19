import { cachedClient } from "../../sanity/lib/client"
import { LatestPostsQuery, PluginBlogs, TutorialBlogs, catergoriesQuery, postsQuery, trendingPostsQuery } from "../../queries"
import Navbar from "@/components/Navbar"
import Searchbar from "@/components/Searchbar"
import Blogs from "@/components/Blogs"
import Card from "@/components/Card"
import Guide from "@/components/Guide"
import Footersocial from "@/components/Footer/footersocial"
import Newsletter from "@/components/Footer/Newsletter"
import FooterCopywrite from "@/components/Footer"
import TrendingCard from "@/components/TrendingCard"


export default async function Home() {
  const posts = await cachedClient(postsQuery)
  const PluginCategory = await cachedClient(PluginBlogs)
  const categories = await cachedClient(catergoriesQuery)
  const latestBlogs = await cachedClient(LatestPostsQuery)
  const trendingPosts = await cachedClient(trendingPostsQuery)
  // const TutorialCategory = await cachedClient(TutorialBlogs)
  return (
    <>
      <Navbar category={categories} PlugCategory={PluginCategory}/>
        <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
          <Searchbar/>
          <Blogs posts={posts} category={categories} latestBlogs={latestBlogs}/>
          <Card PluginCategory={PluginCategory}/>
          <TrendingCard trendingPosts={trendingPosts}/>
          <Guide posts={posts}/>
        </div>
        <Footersocial/>
        <Newsletter/>
      <FooterCopywrite/>
    </>
  )
}
