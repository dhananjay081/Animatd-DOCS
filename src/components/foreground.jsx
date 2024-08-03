import React from 'react'
import Cards from './cards'
import {useRef} from 'react'



function foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close : true,
      tag :{isOpen: true, tagTitel: "Download Now", tagColor: "green"},
    },
    {
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close : false,
      tag :{isOpen: true, tagTitel: "Download Now", tagColor: "blue"},
    },
    {
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close : true,
      tag :{isOpen: true, tagTitel: "Download Now", tagColor: "green"},
    },
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-4'>
       
       { data.map((item,index)=>(
          <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default foreground