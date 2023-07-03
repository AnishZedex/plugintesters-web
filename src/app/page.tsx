import Blogs from "./components/Blogs"
import Card from "./components/Card"
import FooterCopywrite from "./components/Footer"
import Footer from "./components/Footer"
import Guide from "./components/Guide"
import Navbar from "./components/Navbar"
import OrangeRibbon from "./components/OrangeRibbon"
import SearchPillar from "./components/SearchPillar"
import Searchbar from "./components/Searchbar"

export default function Home() {
  return (
    <main>
      <Navbar />
        <OrangeRibbon />
        <div className="container mx-auto px-6 lg:px-52">
          <Searchbar/>
          <SearchPillar/>
          <Blogs/>
          <Card/>
          <Guide/>
        </div>
        {/* <Footerpress/> */}
      <Footer/>
      <FooterCopywrite/>
    </main>
  )
}
