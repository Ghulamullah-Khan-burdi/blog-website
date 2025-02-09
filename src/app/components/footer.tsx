import React from "react";


export default function Footer() {
  return (
    <footer className=" w-full bg-black  mt-18">
      <section className="flex flex-col md:flex-row">
      </section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">

      <div className="flex justify-center items-center text-bold gap-x-2 text-sm text-white">
          <p>
            Built with <b>Next.js </b>and <b>Sanity</b>
          </p>
        </div>
        <div>
          <p className="text-xs text-white">
            © 2024 <b>AI BLOG</b> All rights reserved.
          </p>
        </div>
   </section>

    </footer>
  );
}