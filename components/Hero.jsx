'use client'

import Image from "next/image"
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleSCroll = () => {

  }
  return (
    <div className="hero w-full  flex flex-col mb-10 bg-deluge ">
      <div className="flex-1 pt-36 bg-service-bg bg-center bg-opacity-25 padding-x">
         <h1 className="text-6xl uppercase text-white font-extrabold bg-picton-blue-dark bg-opacity-25">
      Empowering Mobility Independence
         </h1>
         <p className="max-w-xl  text-[27px] text-center text-picton-blue lg:text-left lg:max-w-md mt-5" >
          Your Ride Your Schedule
         </p>
         <CustomButton
           title="Book A Ride"
           containerStyles="bg-picton-blue text-white rounded-full mt-10 mb-10"
           handleClick={handleSCroll}
         />
      </div>
      <div className=" flex-1 bg-heroside">
        <div className="hero__image-container">
          <div  className="hero__image  hidden sm:block">
            <Image
             src="/assets/bg-heroside.png" 
             alt="hero" 
             fill 
             className="object-fill" 
             
            />
        </div>
        </div>
        
        
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero;