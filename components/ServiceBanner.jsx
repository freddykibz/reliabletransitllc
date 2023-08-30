'use client'
import CustomButton from "./CustomButton"
import Image from "next/image"

const Servicebanner = () => {
    const handleSCroll = () => {

    }
  
    return (
    
    <div className='flex-center bg-deluge w-full flex-col md:flex-row mr-0'>
        <div className="flex-1 flex-col py-6 px-4 items-start justify-center">
        <h1 className='md:text-4xl uppercase text-white md:font-extrabold text-[32px] font-medium'>
        Customized Rides for Your Unique Needs
        <br/> Discover Our Services
        </h1>
        <p className="banner__subtitle ">
          Enabling Seamless Journeys <br/> Our Commitment to Accessible and Inclusive Paratransit Solutions  
        </p>
        <div className="flex gap-8 flex-row  flex-center md:mb-20">
        <CustomButton
           title="Book A Ride"
           containerStyles="text-white text-bold uppercase border-white border-4 rounded-full mt-10"
           handleClick={handleSCroll}
         />
         <CustomButton
           title="CALL: +(312) 825-1175"
           containerStyles="bg-picton-blue text-white font-medium rounded-full mt-10"
           handleClick={handleSCroll}
         />
        </div>
        
       </div> 
       <div  className="flex-1 h-540 w-full fill-container">
       <div className="hero__image-container">
        <div  className="hero__image opacity-10 hidden sm:block">
            <Image
             src="/assets/pattern.png" alt="hero" fill className="h-[540] w-full object-cover" 
            />
        </div>
        
        <div className="hero__image-overlay"></div>
      </div>
        
        </div>      
    </div>
  )
}

export default Servicebanner;