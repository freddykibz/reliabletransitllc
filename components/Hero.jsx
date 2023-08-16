import React from 'react'
import Image from 'next/image';
import heroBg from '../public/assets/herobg.jpg' 

const HeroBanner = () => {
  return (
<section className='w-full'>
  <div className='h-96 w-full relative'>
  <Image
    src={heroBg}
    width={1400}
    height={740}
    alt='hero-bg'
    className='hero_img '
  />
    <div className="flex flex-col justify-between items-center w-full">
      <h1 className='head_text text-center'>Empowering Mobility Independence</h1>
      <br/>
      <h3 className='head_text_sub'>Your Ride Your Schedule</h3>
      </div>
  </div>

</section>
  )
}

export default HeroBanner;