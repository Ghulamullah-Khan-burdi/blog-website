import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";



export default function Hero({ data }: { data: Blog }) {
  return (
    <section className="flex flex-col justify-between sm:justify-center h-[480px] lg:w-full max-w-screen-2xl rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 lg:w-full flex-1 max-w-screen-2xl sm:py-0 sm:pr-0">
        <Image
          src={urlFor(data.image).url()}
          alt="blog"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {data.Title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {data.Paragraph}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${data.slug}`}
          className="block px-4 py-1 text-center bg-yellow-500 rounded text-dark font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}