'use client'

import CustomButton from '@components/CustomButton'
import Image from 'next/image'

const AboutUsInfo = () => {
  const handleSCroll = () => {

  }
  return (
    <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
       <div className='flex flex-1 flex-col'>
         <h2 className='font-satoshi capitalize text-4xl lg:max-w-lg font-bold'>
          About US
         </h2>
         <p className='mt-4 lg:max-w-lg info-text'>
         At Reliable Transit LLC, we are more than just a transportation company – 
         we are a bridge to independence, dignity, and connectivity for individuals with unique mobility challenges and medical needs.
          With a deep commitment to enhancing the lives of our passengers, we provide exceptional 
          Paratransit and Non-Emergency Medical Transportation Services (NEMTS) that ensure safe,
           accessible, and reliable journeys for all.
         </p>
         <div className='mt-11'>
            <CustomButton 
              title="Book A Ride"
              containerStyles="bg-picton-blue text-white rounded-full mt-10"
              handleClick={handleSCroll}
            />
         </div>
        
        </div> 
        <div className='flex-1 flex justify-center items-center'>
          <Image
           src="/assets/about.jpg"
           width={640}
           height={538}
           alt="About us"
           className="object-contain"
           />
        </div>
    </section>
  )
}

export default AboutUsInfo