type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base{
    author: Author;
    body: string;
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    desription: string;
}

interface Author extends Base{
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image{
    _type:"image";
    asset: Reference;
}

interface Reference{
    _ref:string;
    _type:"reference";
}

interface Slug{
    _type: "slug";
    current: string;
}

interface Block{
    _key: string;
    _type: "block";
    children:Span[];
    markDefs:any[];
    style:"normal"|"h1"|"h2";
}

interface Span{
    _key:string;
    _type:"span";
    marks:string[];
    text:string;
}

interface Category extends Base{
    description:string;
    title:string;
}

interface MainImage{
    _type: "image";
    asset: Reference;
}

interface Title{
    _type: string;
    current: string;
}
export interface MetaData {

    title?: string;
  
    description?: string;
  
    canonicalUrl?: string;
  
  }