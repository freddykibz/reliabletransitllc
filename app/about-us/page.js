import AboutUsBanner from '@components/AboutBanner';
import AboutHeader from '@components/AboutUsHeader';
import SectionHeader from '@components/SectionHeader';
import React from 'react'

const AboutUs = () => {
  const title = 'About Us'
  return (
    <div className='flex  flex-col flex-center w-full'>
      <AboutUsBanner/>
      <AboutHeader/>
    </div>
  )
}

export default AboutUs;