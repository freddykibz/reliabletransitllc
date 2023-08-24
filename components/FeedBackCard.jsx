import React from 'react'
import Image from 'next/image'
import { quotes } from '../public/assets'

const FeedBackCard = ({content, name, title, img}) => {
    return  (
        <div className="flex justify-between flex-col px-10 py-12 
        rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
         <Image src={quotes}
         width={42}
         height={27}
         alt='quotation marks'
         className='object-contain'
         />
         <p className='font-normal desc_paragraphs leading-[32px] my-10'>{content}</p>

     <div className='flex flex-row'>
        <Image
          src={img}
          width={48}
          height={48}
          alt='Profile Image'
          className='rounded-full '
        />
         <div className='flex flex-col ml-4'>
          <h4 className='font-semibold text-[20px] leading-[32px]'>{name}</h4>
         </div>
     </div>
        </div>
     
     )
}
  

export default FeedBackCard