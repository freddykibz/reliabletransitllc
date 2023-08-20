import CTA from '@components/CTA';
import SectionHeader from '@components/SectionHeader';
import ServiceBanner from '@components/ServiceBanner';
import ServiceCardList from '@components/ServiceCardList';
import React from 'react'

const Services = () => {
  return (
    <div className='w-full'>
     <ServiceBanner/>
     <SectionHeader/>
     <ServiceCardList/>
     <CTA/>

    </div>
  )
}

export default Services;