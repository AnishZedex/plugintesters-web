"use client";
import { SanityDocument } from "@sanity/client";


export default function Category({ category }: { category: SanityDocument }) {
  return (
    <>
      <h1>{category.title}</h1>
    </>
  );
}
