import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function cards({data , reference}) {
  return (
         <motion.div drag whileDrag={{ scale: 1.2} } dragElastic={0.2} dragConstraints={reference} dragTransition={{ bounceStiffness: 600 }}  className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
               <FaRegFileAlt />  
               <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p> 
               <div className="fooeter absolute bottom-0 w-full  left-0 ">
                   <div className="flex items-center justify-between px-8 py-3 mb-3">
                      <h5 className='text-green-00'>{data.filesize}</h5>
                     <span className='w-7  h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                       {data.close ? <IoMdClose /> : <LuDownload size=".7em"  color='#fff'/>}
                     </span> 
                   </div>
                   {
                    data.tag.isOpen &&(
                      <div className={`tag w-full py-4  ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
                         <h3 className='text-sm font-semibold '>{data.tag.tagTitel} </h3>
                      </div>
                    )
                   }
               </div>
         </motion.div >
  
  )
}

export default cards