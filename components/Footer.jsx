import { footerLinks, socialMedia  } from '../constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className='footer_sect bg-greyhood flex flex-center'>
    <div className='flex  flex-2 md:flex-row px-6 flex-col mb-8 w-full mt-14'>
       <div className=' flex-1  flex-center flex flex-col justify-start mr-10'>
         <Image
           src='/assets/logo.png'
           width={150}
           height={46}
           alt="Reliable Transit Logo"
           className='object-contain  bg-opacity-10 shadow-sm'
         />
         <p className='font-medium text-white text-[18px] leading-[30.8px]  max-w-[310px]'>Reliable paratransit and NEMTS services, ensuring seamless transportation solutions for diverse needs.</p>
       </div>
       <div className='flex-[1.5] w-full flex flex-row flex-center md:flex-start  md:gap-80 gap-14 flex-wrap md:mt-0 mt-10 '>
        {footerLinks.map((item)=> (
          <div key={item.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
           <h4 className='font-medium text-[18px] md:text-[26px] leading-[30px] text-picton-blue-dark'>{item.title}</h4>
           <div className='flex flex-col gap-5'>
            {item.links.map((link) => (
              <Link key={link.title}
                 href={link.url}
                  className='font-normal text-white text-[18px] leading-[24px]  hover:text-picton-blue cursor-pointer'
              >
                {link.title}
               </Link> 
            )) }
           </div>
          </div>
        ))}

       </div>
       <div className='flex flex-col flex-center'>
        <h1 className='font-medium text-[24px] text-picton-blue-dark'>Contacts</h1>

        <p className='text-white text-[20px] md:font-medium font-normal mb-4'><a className="underline"  href="mailto:info@reliabletransit.org">Email:info@reliabletransit.org</a></p>
        <p className='text-white text-[20px] md:selection:font-medium font-normal md:mb-8'><a href="tel:+13128251175">Phone: +(312) 825-1175</a></p>
        <div className="flex flex-row md:mt-0 mt-6 py-4 px-4 bg-gallery bg-opacity-2 rounded-full flex-center md:w-full  w-3/5" >
           {socialMedia.map((social, index)=> (
              <Image
               key={social.id}
               src={social.icon}
               alt={social.id}
               width={21}
               height={21}
               className={`object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6': 'mt-0'}`}
              />
      ))}
 </div>
       </div>
    </div>
    {/* Social Media */}

    <div className='w-full  bg-gallery flex  flex-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gallery   '>
       <p className='font-medium text-[18px] leading-[27px] text-center text-picton-blue px-4'>2023 Reliable Transit. All Rights Reserved</p>
   
    <div className="flex flex-row md:mt-0 mt-6 py-4 px-4 " >
      {socialMedia.map((social, index)=> (
              <Image
               key={social.id}
               src={social.icon}
               alt={social.id}
               width={21}
               height={21}
               className={`object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6': 'mt-0'}`}
              />
      ))}
 </div>
    </div>

  </footer>

)
  

export default Footer