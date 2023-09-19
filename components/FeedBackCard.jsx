import React from 'react'
import Image from 'next/image'
import { quotes } from '../public/assets'

const FeedBackCard = ({content, name, title, img}) => {
    return  (
        <div className="flex justify-between flex-col px-10 md:py-6 
        rounded-[20px] md:max-w-[470px] md:mr-10 sm:mr-5 mr-0 my-5 bg-picton-blue md:bg-white shadow-sm shadow-gallery-dark ">
        
         <p className='font-normal text-[20px] md:text-[26px] text-white  md:text-gray-500  leading-[32px] my-10'>{content}</p>

     <div className='flex flex-row flex-center'>
        <Image
          src={img}
          width={48}
          height={48}
          alt='Profile Image'
          className='rounded-full '
        />
         <div className='flex flex-col    ml-4'>
          <h4 className='font-semibold text-[20px] leading-[32px]'>{name}</h4>
         </div>
     </div>
        </div>
     
     )
}
  

export default FeedBackCard