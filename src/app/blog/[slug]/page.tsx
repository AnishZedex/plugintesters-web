import { SanityDocument } from "@sanity/client";
import { PluginBlogs, catergoriesQuery, postPathsQuery, postQuery } from "../../../../queries";
import Navbar from "../../../components/Navbar"
import Post from "../../Post";
import FooterCopywrite from "../../../components/Footer";
import Footersocial from "../../../components/Footer/footersocial";
import Newsletter from "../../../components/Footer/Newsletter";
import { cachedClient,  } from "../../../../sanity/lib/client";

export async function generateMetadata({ params }: { params: any }){ 
  const post = await cachedClient(postQuery, params)
  return {
    title: post?.metadata?.title,
    description: post?.metadata?.description,
  }
}

export async function generateStaticParams() {
    const posts = await cachedClient(postPathsQuery);
    return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await cachedClient<SanityDocument>(postQuery, params);
  const PluginCategory = await cachedClient(PluginBlogs)
  const categories = await cachedClient(catergoriesQuery)
  return(
    <>
      <Navbar category={categories} PlugCategory={PluginCategory}/>
      <div className="container mx-auto px-6 xl:px-36 2xl:px-52">
      <Post post={post} category={categories} />
      </div>
      <Footersocial/>
      <Newsletter/>
      <FooterCopywrite />
    </>
  );
}