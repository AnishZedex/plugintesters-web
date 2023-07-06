import { SanityDocument } from "@sanity/client";
import { categoriesPathQuery, categoryQuery, postPathsQuery, postQuery } from "../../../../../queries";
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
  const category = await cachedClient<SanityDocument>(categoryQuery,{slug:params.category} );
  return(
    <>
      <Navbar />
      <OrangeRibbon/>
      <div className="container mx-auto px-6 lg:px-52">
      <Category category={category} />
      </div>
      <Footersocial/>
      <Newsletter/>
      <FooterCopywrite />
    </>
  );
}