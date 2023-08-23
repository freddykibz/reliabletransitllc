'use client'
import { FaRegEnvelope} from "react-icons/fa";
import { BiPhone } from 'react-icons/bi';
const TopBar = () => {
  return (
    <div className='topbar w-full bg-deluge flex-center flex flex-row'>
     <div className='flex gap-5 py-2'>
         <div className='flex-1 flex-row '>
         <h3 className="flex gap-4 text-white text-xl cursor-pointer"><FaRegEnvelope size='1.5rem'/><a className="underline"  href="mailto:info@reliabletransit.org">Email:info@reliabletransit.org</a></h3>
         </div>
         <div className='flex-1'>
          <h3 className="flex gap-4 text-white text-xl"><BiPhone size='1.5rem'/>Phone: +1(773) 383-64</h3></div>
     </div>
    </div>
  )
}

export default TopBar