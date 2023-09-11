'use client'

import CustomButton from '@components/CustomButton'
import Image from 'next/image'

const AboutUsInfo = () => {
  const handleSCroll = () => {

  }
  return (
    <section className='flex  flex-col bg-yellow-500 md:flex-row  justify-between items-center max-lg:flex-col gap-10 w-full' name="about" id="about">
     
        
       <div className='flex flex-1 flex-col'>
         <h2 className='hidden sm:block sect_head text-[24] text-center text-picton-blue bg-green-600'>
         WHO WE ARE
         </h2>
         <p className='desc_paragraphs text-gray-500'>
         At Reliable Transit LLC, we are more than just a transportation company – 
         we are a bridge to independence, dignity, and connectivity for individuals with unique mobility challenges and medical needs.
          With a deep commitment to enhancing the lives of our passengers, we provide exceptional 
          Paratransit and Non-Emergency Medical Transportation Services (NEMTS) that ensure safe,
           accessible, and reliable journeys for all.
         </p>
        
        </div> 
        <div className='flex-1 flex justify-center items-center '>
          <Image
           src="/assets/about.jpg"
           width={640}
           height={538}
           alt="About us"
           className="w-full"
           />
        </div>
    </section>
  )
}

export default AboutUsInfo