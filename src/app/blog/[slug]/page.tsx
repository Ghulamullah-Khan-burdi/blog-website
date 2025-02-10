import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>; // ✅ Fix: params is now a Promise
};

export default async function BlogPage({ params }: PageProps) {
  // ✅ Await params to extract slug
  const { slug } = await params;

  // ✅ Use parameterized query for security
  const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const data = await client.fetch(query, { slug });

  // ✅ Handle missing blog post
  if (!data) return notFound();

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {data.Title}
      </h1>

      {/* Featured Image (Check if image exists) */}
      {data.image && (
        <Image
          src={urlFor(data.image).url()}
          width={500}
          height={500}
          alt={data.Title || "Blog Image"}
          className="rounded"
        />
      )}

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