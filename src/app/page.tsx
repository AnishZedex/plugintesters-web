
import { cachedClient, client } from "../../sanity/lib/client"
import { postsQuery } from "../../queries"
import Navbar from "@/components/Navbar"
import OrangeRibbon from "@/components/OrangeRibbon"
import Searchbar from "@/components/Searchbar"
import SearchPillar from "@/components/SearchPillar"
import Blogs from "@/components/Blogs"
import Card from "@/components/Card"
import Guide from "@/components/Guide"
import Footersocial from "@/components/Footer/footersocial"
import Newsletter from "@/components/Footer/Newsletter"
import FooterCopywrite from "@/components/Footer"


export default async function Home() {
  const posts = await cachedClient(postsQuery)
  return (
    <>
      <Navbar />
        <OrangeRibbon />
        <div className="container mx-auto px-6 lg:px-52">
          <Searchbar/>
          <SearchPillar/>
          <Blogs posts={posts}/>
          <Card/>
          <Guide/>
        </div>
        <Footersocial/>
        <Newsletter/>
      <FooterCopywrite/>
    </>
  )
}
