import React, { useRef } from 'react'
import Card from './Card'

function Frontground() {

  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officiis blanditiis, eaque .",
      filesize: ".9mb",
      close: true,  
      tag: {isOpen: true, tagTitle: " Download Now", tagColor:"green"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officiis blanditiis, eaque .",
      filesize: ".9mb",
      close: true,  
      tag: {isOpen: true, tagTitle: " Download Now", tagColor:"blue"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officiis blanditiis, eaque .",
      filesize: ".19mb",
      close: true,  
      tag: {isOpen: false, tagTitle: " Click ", tagColor:"green"},
    }

  ]


  return (
    <div ref={ref} className='  w-full h-screen fixed  flex flex-wrap gap-10  top-0 left-0 p-5 z-[3]'>
      {data.map((item, i) => {
      return <Card data={item} reference ={ref} />  
      })}
      
    </div>  

  )
}

export default Frontground