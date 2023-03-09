import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';





export default function Project({ face, link, name, id, imageUrl }) {
   

   return (
      <div className={`mx-auto flex flex-col gap-5  align-center ${face}`}>
         {/* image */}
         <div className='sm:w-[50%] flex' >
            <Image
               src={imageUrl}

               loading="lazy"
               alt="picture of one of JJWILLMIN's projects"
               className=""
               width={500}
               height={500}
               style={{ maxWidth: '100%', height: 'auto' }}
            />
         </div>

         {/* text container */}
         <div className="flex flex-col gap-5  sm:w-[50%] self-center ">
            <h2 className="text-2xl font-bold">{name}</h2>
            <Link href={`/${link}`} key={id}>
               <button className="rounded border-solid bg-primary text-white px-5 py-3
               uppercase text-[1rem] font-bold">View Project</button>
            </Link>
         </div>
      </div>
   )
}

