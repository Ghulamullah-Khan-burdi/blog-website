import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function page({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type == "blog" && slug.current == "${slug}"]{ 
Title, Paragraph, image, block
}[0]`

   const data = await client.fetch(query)
   

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
       {data.Title}
      
      </h1>

      {/* Featured Image */}
      <Image
        src={urlFor(data.image).url()}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-blue-500">
        Summary
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify font-bold text-dark/80 dark:text-light/80 ">
      {data.Paragraph}
      </p>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
         <PortableText value={data.block} />
      </section>
    </article>
  );
}