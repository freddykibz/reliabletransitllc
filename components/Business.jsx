import Button from "./Button"
import FeatureCard from "./FeatureCard"
import { features } from '../constants'


const Business = () => {
  return (
    <section className='flex-col business_container '>
        <div className='section_info'>
            <h2 className='sect_head underline decoration-deluge decoration-wavy '>WE MAKE IT <br/> EASY! </h2>
            <p className=' desc_paragraphs max-w-[470px] mt-5 '> Moreover, Company X's well-trained and compassionate drivers undergo specialized training to offer courteous assistance, making clients feel comfortable and valued throughout their travels.</p>         
           <Button />

        </div>
        <div className="flex-col">
           {features.map((feature, index)=> (
            <FeatureCard key={feature.id} {...feature} index={index}/>
           ))}
        </div>
 
    </section>
  )
}

export default Business