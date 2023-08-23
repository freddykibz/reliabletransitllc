"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {
  return (
   <nav className='flex-between w-full mb-16 pt-3'>
    <Link href="/" className='flex gap-2 flex-center'>
      <Image
       src="/assets/logo.png"
       width={200}
       height={150
      }
       alt="Reliable Transit Logo"
      /> 
    </Link>
    {/* Desktop menu */}
    <div className='sm:flex hidden flex-center gap-5 '>
      <div className='flex gap-3 md:gap-5 text-picton-blue'>
        <Link href="/"> 
          HOME
        </Link>
        <Link href="/services"> 
          SERVICES
        </Link>
        <Link href="/about-us"> 
          ABOUT US
        </Link>
        <Link href="/contact"> 
          CONTACT
        </Link>
        <Link href="/faqs"> 
          FAQS
        </Link>
      </div>
      <Link href='/book-appointment'>
      <button
       type='button'
       className='bg-deluge py-4  text-white px-6 px-'>BOOK APPOINTMENT
       </button>
      </Link>
      </div>
   </nav>
  )
}

export default Nav