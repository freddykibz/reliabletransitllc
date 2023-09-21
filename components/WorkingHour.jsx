import React from 'react'
import Image from 'next/image'

const WorkingHour = () => {
  return (
    <section className='flex flex-center  w-full'>
       {/* <div className='flex-1 w-full bg'>
        <div className='w-full bg-cover'>
        <Image
         src="/assets/pattern.png"
         width={650}
         height={640}
         alt='photo for schedule'
         objectfill
         className='object-fill'
        
        />
        </div>
       
       </div> */}
       <div className='flex flex-center px-12'>
        <div className='work_card  w-full'>
            <h3 className='font-medium text-[20px]'>Working Hours</h3>
            <p className='px-4 py-2 flex-center w-full text-[18px] text-greyhood'><strong className='text-picton-blue pr-2'>Monday:</strong> 4:00 AM - 6:00 PM</p>
            <p className='px-4 py-2 flex-center w-full text-[18px] text-greyhood'><strong  className='text-picton-blue pr-2'>Tuesday:</strong> 4:00 AM - 6:00 PM</p>
            <p className='px-4 py-2 flex-center w-full text-[18px] text-greyhood'><strong className='text-picton-blue pr-2'>Wednesday:</strong> 4:00 AM - 6:00 PM</p>
            <p className='px-4 py-2 flex-center w-full text-[18px] text-greyhood'><strong className='text-picton-blue pr-2'>Thursday:</strong> 4:00 AM - 6:00 PM</p>
            <p className='px-4 py-2 flex-center w-full text-[18px] text-greyhood'><strong className='text-picton-blue pr-2'>Friday:</strong>  4:00 AM - 6:00 PM</p>
            <p className='px-4 py-2 flex-center w-full text-[18px] text-greyhood'><strong className='text-picton-blue pr-2'>Saturday:</strong> 4:00 AM - 6:00 PM</p>
        </div>
       </div>
    </section>
  )
}

export default WorkingHour