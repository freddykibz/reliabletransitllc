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
            <p><strong className='text-picton-blue'>Monday:</strong> 4:00 AM - 6:00 PM</p>
            <p><strong  className='text-picton-blue'>Tuesday:</strong> 4:00 AM - 6:00 PM</p>
            <p><strong className='text-picton-blue'>Wednesday:</strong> 4:00 AM - 6:00 PM</p>
            <p><strong className='text-picton-blue'>Thursday:</strong> 4:00 AM - 6:00 PM</p>
            <p><strong className='text-picton-blue'>Friday:</strong>  4:00 AM - 6:00 PM</p>
            <p><strong className='text-picton-blue'>Saturday:</strong> 4:00 AM - 6:00 PM</p>
        </div>
       </div>
    </section>
  )
}

export default WorkingHour