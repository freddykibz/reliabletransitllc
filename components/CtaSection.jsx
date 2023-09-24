import React from 'react'

const CtaSection = () => {
  return (
    <section className='cta_bg flex-center flex-col w-full relative'>
       
        <h1 className='text-picton-blue text-2xl md:text-6xl font-bold text-center'>Proprietary Technology Make our Rides Safe</h1>
        <h2 className='text-white text-[18px]  md:text-3xl font-light text-center transition-all duration-200 mt-2'>We use cutting edge technology to keep an eye on every ride in real time.
            We monitor car speed to vehicle safety to time of arrival at every stop along
            the way. The software allows us to monitor our vehicles with a precise
            location with the intent of minimizing risks. This makes sure our customers
            are safe while riding with us</h2>
     <div className='image-overlay flex-center flex-col absolute z-10'></div>
    </section> 
     )
}

export default CtaSection