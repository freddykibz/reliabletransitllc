import Button from "./Button"
import FeatureCard from "./FeatureCard"
import { features } from '../constants'
import Link from "next/link"


const Business = () => {
  return (
    <section className='flex-col business_container flex-center gap-10 relative'>
        <div className='section_info  flex-start '>
            <h2 className='sect_head text-picton-blue text-start'>Proprietary Technology Driven </h2>
            <p className='md:text-[24px] text-[18]  text-gray-600   font-normal  max-w-[540px] mt-5 '>We use cutting edge technology to keep an eye on every ride in real time.
We monitor car speed to vehicle safety to time of arrival at every stop along
the way. The software allows us to monitor our vehicles with a precise
location with the intent of minimizing risks. This makes sure our customers
are safe while riding with us.</p>         
            <button className="py-4 px-6 bg-picton-blue font-semibold mt-10 rounded-full text-white uppercase">   
         <Link href="/book-appointment">BOOK APPOINTMENT</Link> 
         </button>
        </div>
        <div className=" flex-1 flex-col mt-8">
           {features.map((feature, index)=> (
            <FeatureCard key={feature.id} {...feature} index={index}/>
           ))}
        </div>
 
    </section>
  )
}

export default Business