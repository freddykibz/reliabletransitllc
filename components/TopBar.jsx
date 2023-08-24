'use client'
import { FaRegEnvelope} from "react-icons/fa";
import { BiPhone } from 'react-icons/bi';
const TopBar = () => {
  return (
    <div className='flex-col flex-center md:flex-row md:w-full md:mb-80  bg-gallery fixed top-0 left-0 right-0 md:z-10 '>
     <div className='flex gap-2 w-full flex-col flex-center  md:flex-row text-sm  font-normal px-4 py-4'>
         <div className='flex-1'>
         <h3 className="flex-1 gap-4 flex-center text-picton-blue md:font-medium md:text-xl cursor-pointer"><FaRegEnvelope size='1.5rem'/><a className="underline"  href="mailto:info@reliabletransit.org">Email:info@reliabletransit.org</a></h3>
         </div>
         <div className='flex-1'>
          <h3 className="flex gap-4 text-picton-blue md:font-medium md:text-xl"><BiPhone size='1.5rem'/>Phone: +1(773) 383-64</h3>
          </div>
     </div>
    </div>
  )
}

export default TopBar