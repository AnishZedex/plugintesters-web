import { groq } from "next-sanity";

// Get all Posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, body, mainImage,"category": categories[]->title
  }`;


// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    title, mainImage, body,"author":author->name, publishedAt, "categories":categories[]->title, createdAt,"tag":tags[]->label
  }`;


// Get all Posts by slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all trending posts
export const trendingPostsQuery = groq`*[_type == "post" && defined(slug.current) && trending == true]{
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title, publishedAt,
}`;

// Get all Catergories
export const catergoriesQuery = groq`*[_type =="category"]{
  _id, title, slug,"numberOfBlogs": count(*[_type=="post" && references(^._id)])
}`;


// get all Category by Slugs
export const categoriesPathQuery = groq`*[_type=="category" && defined(slug.current)][]{
  "params": {"slug": slug.current}
}`;

//get a single Category
export const categoryQuery = groq`*[_type=="category" && slug.current == $slug][0]{
  _id, title, slug
}`


//get all posts of a single category
export const blogByCategory = groq`*[_type=='post'&& references(*[_type=="category" && slug.current==$slug]._id)]{
  _id,title,body,mainImage,slug,"category":categories[]->title,publishedAt
}`

//get Posts of Plugins Category
export const PluginBlogs = groq`*[_type=='post'&& references(*[_type=="category" && slug.current=="plugins"]._id)]{
  _id,title,body,mainImage,slug
}`

//get Posts of Tutorials Category
export const TutorialBlogs = groq`*[_type=='post'&& references(*[_type=="category" && slug.current=="tutorials"]._id)]{
  _id,title,body,mainImage,slug
}`

// Get all Latest posts
export const LatestPostsQuery = groq`*[_type == "post" && defined(slug.current)]
| order(publishedAt desc)
{
  _id,
  title,
  slug,
  body,
  mainImage,
  "author": author->name,
  "category": categories[]->title
}`;