"use client"
import Image from 'next/image';
import {  socialMedia  } from '../constants';
import React from 'react'
import { FaRegEnvelope} from "react-icons/fa";
import { BiPhone } from "react-icons/bi";

const ContactBlock = () => {
  return (
    <section className='flex-col w-full flex-center  md:flex-row bg-heroside-bg bg-repeat py-6 px-12 flex-between gap-4 shadow-sm '>
        <div></div>
        <div className='flex flex-center'>
        <h1 className="hidden sm:block flex-1 gap-4 flex-center text-deluge md:font-medium md:text-2xl cursor-pointer"><a className="underline"  href="mailto:info@reliabletransit.org">Email:info@reliabletransit.org</a></h1>
        </div> 
        <div>
        <h3 className="flex mt-2 flex-row gap-4 text-deluge md:font-medium md:text-xl"><BiPhone size='1.5rem'/><a className href="tel:+13128251175">Phone: +(312) 825-1175</a></h3>
        </div>
        <div>
        <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index)=> (
              <Image
              key={social.id}
               src={social.icon}
               alt={social.id} 
               width={32}
               height={32}
               className={`object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6': 'mt-0'}`}
              />
      ))}
 </div>
 </div>

    </section>
  )
}

export default ContactBlock