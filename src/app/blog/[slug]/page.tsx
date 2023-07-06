import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "../../../../queries";
import Navbar from "../../../components/Navbar"
import Post from "../../Post";
import FooterCopywrite from "../../../components/Footer";
import Footersocial from "../../../components/Footer/footersocial";
import Newsletter from "../../../components/Footer/Newsletter";
import OrangeRibbon from "../../../components/OrangeRibbon";
import { cachedClient } from "../../../../sanity/lib/client";


export async function generateStaticParams() {
    const posts = await cachedClient(postPathsQuery);
    return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await cachedClient<SanityDocument>(postQuery, params);
  return(
    <>
      <Navbar />
      <OrangeRibbon/>
      <div className="container mx-auto px-6 lg:px-52">
      <Post post={post} />
      </div>
      <Footersocial/>
      <Newsletter/>
      <FooterCopywrite />
    </>
  );
}