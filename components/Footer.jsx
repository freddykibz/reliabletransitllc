// import { logo } from '../public/assets/logo'
import { footerLinks, socialMedia  } from '../constants';
import Image from 'next/image';
import ContactBlock from './ContactBlock';

const Footer = () => (
  <section className='footer_sect bg-deluge flex flex-center bottom'>
    <div className='flex  flex-2 md:flex-row px-6 flex-col mb-8 w-full mt-14'>
       <div className=' flex-1 flex flex-col justify-start mr-10'>
         <Image
           src='/assets/logo.png'
           width={120}
           height={50}
           alt="Reliable Transit Logo"
           className='object-contain  bg-opacity-10 shadow-sm'
         />
         <p className='font-medium text-white text-[18px] leading-[30.8px]  max-w-[310px]'>Reliable paratransit and NEMTS services, ensuring seamless transportation solutions for diverse needs.</p>
       </div>
       <div className='flex-[1.5] w-full flex flex-row flex-center gap-10 flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=> (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
           <h4 className='font-medium text-[18px] md:text-[26px] leading-[30px] text-picton-blue-dark'>
            {footerLink.title}
           </h4>
           <ul>
            {footerLink.links.map((link) => (
               <li key={link.name}
                className='font-normal text-white text-[18px] leading-[24px]  hover:text-picton-blue'
               >
                {link.name}
               </li>
            )) }
           </ul>
          </div>
        ))}

       </div>
       <div className='flex flex-col flex-center'>
        <h1 className='font-medium text-[24px] text-picton-blue-dark'>Contacts</h1>

        <p className='text-white text-[20px] font-medium mb-4'>Email : info@reliabletransit.org</p>
        <p className='text-white text-[20px] font-medium md:mb-8'>Phone : +(312) 825-1175</p>
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

    <div className='w-full  bg-gallery flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gallery   '>
       <p className='font-medium text-[18px] leading-[27px] text-center text-deluge px-4'>2023 Reliable Transit. All Rights Reserved</p>
   
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

  </section>

)
  

export default Footer