// import { logo } from '../public/assets/logo'
import { footerLinks, socialMedia  } from '../constants';
import Image from 'next/image';

const Footer = () => (
  <section className='footer_sect bg-'>
    <div className=' flex md:flex-row px-6 flex-col mb-8 w-full mt-14'>
       <div className=' flex-1 flex flex-col justify-start mr-10 '>
         <Image
           src='/assets/logo.png'
           width={240}
           height={50}
           alt="Reliable Transit Logo"
           className='object-contain'
         />
         <p className='font-normal text-[18px] leading-[30.8px]  max-w-[310px]'>Reliable paratransit and NEMTS services, ensuring seamless transportation solutions for diverse needs.</p>
       </div>
       <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=> (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
           <h4 className='font-medium text-[18px] leading-[27px] text-picton-blue-dark'>
            {footerLink.title}
           </h4>
           <ul>
            {footerLink.links.map((link) => (
               <li key={link.name}
                className='font-normal text-[16px] leading-[24px]  hover:text-picton-blue'
               >
                {link.name}
               </li>
            )) }
           </ul>
          </div>
        ))}

       </div>
    </div>

  </section>

)
  

export default Footer