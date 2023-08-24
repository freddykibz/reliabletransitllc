'use client'

import Image from "next/image"
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleSCroll = () => {

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
         <h1 className="heading-title">
      Empowering Mobility Independence
         </h1>
         <p className="max-w-xl  text-[27px] text-center text-gray-500 lg:text-left lg:max-w-md mt-5" >
          Your Ride Your Schedule
         </p>
         <CustomButton
           title="Book A Ride"
           containerStyles="bg-picton-blue text-white rounded-full mt-10"
           handleClick={handleSCroll}
         />
      </div>
      <div className="hero__image-container hidden">
        <div  className="hero__image">
            <Image
             src="/assets/van.png" alt="hero" fill className="object-contain" 
            />
        </div>
        
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero;