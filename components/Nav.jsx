"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='w-full top-0 left-0 right-0 relative'>
      <nav className="w-full  sticky bg-picton-blue z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/"> 
              <Image
                  src="/assets/logo.png"
                  width={120}
                  height={46}
                  alt="Reliable Transit Logo"
                  /> 
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-picton-blue-dark focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/assets/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/assets/hamburger-menu.svg"
                      width={64}
                      height={64}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="nav-links">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="nav-links">
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    SERVICES
                  </Link>
                </li>
                <li className="nav-links">
                  <Link href="/#about" onClick={() => setNavbar(!navbar)}>
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-links">
                  <Link href="/#contact" onClick={() => setNavbar(!navbar)}>
                    CONTACT
                  </Link>
                </li>
                {/* <li className="nav-links">
                  <Link href="/faqs" onClick={() => setNavbar(!navbar)}>
                    FAQS
                  </Link>
                </li> */}
                <Link href='/book-appointment' className='flex-center mt-4  md:mt-0   '>
                  <button
                  type='button'
                  className='bg-white py-4  text-picton-blue rounded-full font-semibold text-xl px-4 md:px-6 hover:bg-picton-blue-light hover:text-white'>BOOK APPOINTMENT
                  </button>
                 </Link>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;