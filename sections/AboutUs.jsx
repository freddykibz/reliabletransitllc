'use client'

import CustomButton from '@components/CustomButton'
import Image from 'next/image'

const AboutUsInfo = () => {
  const handleSCroll = () => {

  }
  return (
    <section className='flex  flex-col bg-yellow-500 md:flex-row  justify-between items-center max-lg:flex-col gap-10 w-full'>
     
        
       <div className='flex flex-1 flex-col'>
         <h2 className='hidden sm:block sect_head text-[24] text-center text-picton-blue bg-green-600'>
         WHO WE ARE
         </h2>
         <p className='desc_paragraphs text-gray-500'>
         Reliable Transit provides a high standard of non-emergency medical
transportation for our clients resident in the Chicago land area and
surrounding communities and assure them of safe and reliable services.
We are guided by caring, respectful and being reliable . Whether you need
to go visit a doctor or see loved ones, we are here to serve.
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