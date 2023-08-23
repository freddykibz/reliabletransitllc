import AboutUsBanner from '@components/AboutBanner';
import AboutHeader from '@components/AboutUsHeader';
import AboutUsInfo from '@sections/AboutUs';
import CTA from '@components/CTA';
import CoreValues from '@components/CoreValues';
import React from 'react'
import Mission from '@sections/Mission';

const AboutUs = () => {
  return (
    <div className=' flex flex-col flex-center w-full'>
      <AboutUsBanner/>
      <AboutHeader/>
      <AboutUsInfo/>
      <h2 className='heading2 text-center'>Mission</h2>
      <Mission/>
      <h2 className='heading2 text-center'>Core Values</h2>
      <CoreValues/>
      <CTA/>
    </div>
  )
}

export default AboutUs;