import React from 'react'
import Hero from './components/hero'
import { client } from '@/sanity/lib/client'


const Homepage = async() => {
     const query = `*[_type == "blog"] | order(_updatedAt asc){
  Title,Paragraph,image,
   "slug":slug.current
}`
     
     const data:Blog[] = await client.fetch(query)
     
  return (
    <div className="grid grid-cols-3 gap-6">

      { data.map((data:Blog) => (
         <Hero data={data} key={data.slug}/>
      ))
        
       }
       
    </div>
  )
}

export default Homepage
