import CTA from '@components/CTA';
import SectionHeader from '@components/SectionHeader';
import ServiceBanner from '@components/ServiceBanner';
import ServiceCardList from '@components/ServiceCardList';
import ServicePerks from '@sections/ServicePerks';
import ServiceStatement from '@components/ServiceStatement';

import React from 'react'
import ContactForm from '@app/contact/ContactForm';
import ContactBlock from '@components/ContactBlock';

const Services = () => {
  return (
    <div className='flex-col  w-full flex-center'>
     <ServiceBanner/>
     <ServiceStatement/>
      <ServicePerks/>
     <SectionHeader/>
     <ServiceCardList/>
     <CTA/>
     <div className='w-full'>
     <h1 className="font-semibold xs:text-[48px] text-[24] md:text-[48px] text-deluge xs:leading-[76.8px] leading-[66.8px] w-full text-center py-6">GET IN TOUCH WITH US</h1>
     
    <ContactBlock/>
     <ContactForm/>
     </div>
    

    </div>
  )
}

export default Services;