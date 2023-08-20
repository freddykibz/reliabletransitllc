'use client'

import Image from "next/image"
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleSCroll = () => {

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
         <h1 className="hero__title">
      Empowering Mobility Independence
         </h1>
         <p className="hero__subtitle">
          Your Ride Your Schedule
         </p>
         <CustomButton
           title="Book A Ride"
           containerStyles="bg-picton-blue text-white rounded-full mt-10"
           handleClick={handleSCroll}
         />
      </div>
      <div className="hero__image-container">
        <div  className="hero__image">
            <Image
             src="/assets/hero.png" alt="hero" fill className="object-contain" 
            />
        </div>
        
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero;