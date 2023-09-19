'use client'
import CustomButton from "./CustomButton"
import Image from "next/image"
import ServiceCarousel from "./ServiceCarousel"
import Link from "next/link"

const Servicebanner = () => {
    const handleSCroll = () => {

    }
  
    return (
    
    <div className='flex-center bg-gallery w-full flex-col md:flex-row mr-0'>
        <div className="hidden sm:block flex-1 flex-col py-6 px-4 items-start justify-center">
        <h1 className='md:text-4xl uppercase text-picton-blue md:font-extrabold text-[32px] font-medium'>
        Customized Rides for Your Unique Needs
        <br/> Discover Our Services
        </h1>
        <p className="banner__subtitle ">
          Enabling Seamless Journeys <br/> Our Commitment to Accessible and Inclusive Paratransit Solutions  
        </p>
        <div className="flex gap-8 flex-row  flex-center md:mb-20 mt-10">
        <button className="py-4 px-6 bg-greyhood font-semibold rounded-full text-white uppercase flex-center">   
         <Link href="/book-appointment">BOOK APPOINTMENT</Link> 
         </button>
         <button className="py-4 px-6 bg-picton-blue font-semibold rounded-full text-white uppercase flex-center">   
         <Link legacyBehavior href="tel:+13128251175"><a href="tel:+13128251175">Phone: +(312) 825-1175</a></Link> 
         </button>
        </div>
        
       </div> 
       <div  className="flex-1 h-540 flex-center w-full fill-container">
        <ServiceCarousel/>
       {/* <div className="hero__image-container">
        <div  className="hero__image opacity-10 hidden sm:block">
            <Image
             src="/assets/pattern.png" alt="hero" fill className="h-[540] w-full object-cover" 
            />
        </div>
        
        <div className="hero__image-overlay"></div> */}
      </div>
        
        </div>      
    // </div>
  )
}

export default Servicebanner;