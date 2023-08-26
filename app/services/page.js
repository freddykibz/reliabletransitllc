import CTA from '@components/CTA';
import SectionHeader from '@components/SectionHeader';
import ServiceBanner from '@components/ServiceBanner';
import ServiceCardList from '@components/ServiceCardList';
import ServicePerks from '@sections/ServicePerks';
import ServiceStatement from '@components/ServiceStatement';

import React from 'react'

const Services = () => {
  return (
    <div className='flex-col w-full flex-center'>
     <ServiceBanner/>
     <ServiceStatement/>
     
      <ServicePerks/>
     <SectionHeader/>
     <ServiceCardList/>
     <CTA/>

    </div>
  )
}

export default Services;