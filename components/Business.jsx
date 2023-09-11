import Button from "./Button"
import FeatureCard from "./FeatureCard"
import { features } from '../constants'
import Link from "next/link"


const Business = () => {
  return (
    <section className='flex-col business_container flex-center gap-10 relative'>
        <div className='section_info  flex-start '>
            <h2 className='sect_head text-deluge text-start'>WE MAKE IT EASY! </h2>
            <p className='md:text-[28px] text-[18]  text-gray-600   font-normal  max-w-[540px] mt-5 '> Moreover, Company X's well-trained and compassionate drivers undergo specialized training to offer courteous assistance, making clients feel comfortable and valued throughout their travels.</p>         
            <button className="py-4 px-6 bg-deluge font-semibold mt-10 rounded-full text-white uppercase">   
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