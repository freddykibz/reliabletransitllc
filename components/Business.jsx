import Button from "./Button"
import FeatureCard from "./FeatureCard"
import { features } from '../constants'


const Business = () => {
  return (
    <section className='flex-col business_container '>
        <div className='section_info'>
            <h2 className='sect_head text-[24] text-center'>WE MAKE IT <br/> EASY! </h2>
            <p className='md:text-[32px] text-[24]  text-gray-600   font-normal  max-w-[540px] mt-5 '> Moreover, Company X's well-trained and compassionate drivers undergo specialized training to offer courteous assistance, making clients feel comfortable and valued throughout their travels.</p>         
           <Button />
        </div>
        <div className="flex-col mt-8">
           {features.map((feature, index)=> (
            <FeatureCard key={feature.id} {...feature} index={index}/>
           ))}
        </div>
 
    </section>
  )
}

export default Business