'use client'

import CustomButton from "./CustomButton"

const Servicebanner = () => {
    const handleSCroll = () => {

    }
  
    return (
    
    <div className='banner bg-service-bg w-full bg-deluge-light'>
        <div className="flex flex-col py-6 px-4 items-start justify-center">
        <h1 className='banner__title'>
        Customized Rides for Your Unique Needs
        <br/> Discover Our Services
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

export default Servicebanner;