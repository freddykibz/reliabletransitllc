import React from 'react'
import Image from 'next/image'
const ViewAssets = () => {
  return (
    <section className='flex flex-col md:flex-row w-full mt-4'>
        <div className='flex-1 flex-col flex-center'>
            <h1 className='md:text-4xl uppercase text-picton-blue md:font-extrabold text-[20px] text-center font-medium'>fostering independence, ensuring dignity, and fostering connectivity </h1>
             <h5 className='md:text-2xl  text-greyhood md:font-extrabold text-[20px] text-center font-medium'>we bridge gaps, remove barriers, <br/> and create inclusive transportation</h5>   
             <p  className=" px-4 font-normal break-normal text-greyhood text-[16px] md:text-[22px] leading-[24px]  md:leading-[30px]     mb-1 py-6 "> Our well-maintained fleet, compassionate staff, and innovative technology ensure that your journey is not only reliable but also tailored to your unique needs. Count on us to deliver exceptional service, connecting you to your destinations with dignity and care."</p>
             <button className="py-4 px-6 bg-picton-blue font-semibold rounded-full text-white uppercase flex-center">Book Appointment</button> 
        </div>
        <div className='flex-1 flex-col'>
            <div className='imageContainer rounded-2xl shadow-sm'>
                <Image
                 src="/assets/vansreliable.jpg"
                 width={700}
                 height={540}
                 objectFit='cover'
                 alt="van photo"
                />
            </div>
        </div>
    </section>
  )
}

export default ViewAssets