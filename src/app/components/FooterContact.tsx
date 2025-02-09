import React from "react";

export default function FooterContact() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-96">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex flex-col justify-center items-start p-12">
        <h2 className="text-3xl font-bold mb-16">Contact Me</h2>
        <div className="space-y-3 font-bold">
          <p className="flex items-center font-bold"><span className="mr-6">📞</span> +92 3462074773</p>
          <p className="flex items-center font-bold"><span className="mr-6">📧</span> khanburdi2005@gmail.com</p>
          <p className="flex items-center font-bold"><b>LinkedIn: </b><a href="https://www.linkedin.com/in/ghulamullah-khan-burdi-67965b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" id="linkedin">LinkedIn</a></p>
              
        </div>
      </div>

      {/* Right Side - Comment Form */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 flex flex-col justify-center items-start p-12">
        <h2 className="text-2xl font-bold text-black mb-4">Leave a Comment</h2>
        <textarea
          className="w-full p-3 mt-4 rounded border border-gray-300 focus:outline-none"
          placeholder="Write your comment here..."
        ></textarea>
        <button className="w-40 bg-black text-white px-4 py-2 mt-4 rounded font-bold hover:bg-gray-800">SUBMIT</button>
      </div>
    </div>
  );
}