import { cachedClient } from "../../sanity/lib/client"
import { LatestPostsQuery, PluginBlogs, TutorialBlogs, catergoriesQuery, postsQuery, siteConfigQuery, trendingPostsQuery } from "../../queries"
import Navbar from "@/components/Navbar"
import Searchbar from "@/components/Searchbar"
import Blogs from "@/components/Blogs"
import Card from "@/components/Card"
import Guide from "@/components/Guide"
import Footersocial from "@/components/Footer/footersocial"
import Newsletter from "@/components/Footer/Newsletter"
import FooterCopywrite from "@/components/Footer"
import TrendingCard from "@/components/TrendingCard"
import siteConfig from "../../sanity/schemas/siteConfig"

export async function generateMetadata(){ 
  const siteConfig = await cachedClient(siteConfigQuery)
  return {
    title: siteConfig.title,
    description: siteConfig.description,
  }
}

export default async function Home() {
  const posts = await cachedClient(postsQuery)
  const PluginCategory = await cachedClient(PluginBlogs)
  const TutorialCategory = await cachedClient(TutorialBlogs)
  const categories = await cachedClient(catergoriesQuery)
  const latestBlogs = await cachedClient(LatestPostsQuery)
  const trendingPosts = await cachedClient(trendingPostsQuery)
  const siteConfig = await cachedClient(siteConfigQuery)
  return (
    <>
      <Navbar category={categories} PlugCategory={PluginCategory} TutCategory={TutorialCategory} siteConfig={siteConfig}/>
        <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
          <Searchbar trendingPosts={trendingPosts}/>
          <Blogs posts={posts} category={categories} latestBlogs={latestBlogs} siteConfig={siteConfig}/>
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