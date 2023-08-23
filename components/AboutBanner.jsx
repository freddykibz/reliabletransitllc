'use client'

import CustomButton from "./CustomButton"

const AboutUsBanner = () => {
    const handleSCroll = () => {

    }
  
    return (
    
    <div className='banner bg-cover w-full bg-contact-bg bg-deluge-light'>
        <div className="flex flex-col py-6 px-4 items-start justify-center">
        <h1 className='banner__title'>
        "We Are Dedicated To"
        <br className="text-orange-400"/> Safe Journeys
        </h1>
        <p className="banner__subtitle ">
          Enabling Seamless Journeys <br/> Our Commitment to Accessible and Inclusive Paratransit Solutions  
        </p>
        <CustomButton
           title="Book A Ride"
           containerStyles="bg-picton-blue text-white rounded-full mt-10"
           handleClick={handleSCroll}
         />
       </div>       
    </div>
  )
}

export default AboutUsBanner;