import CoreValueCard from "./CoreValueCard"
import { coreValues } from "@constants"

const CoreValues = () => {
  return (
    <section className=" w-full bg-gallery  flex-col md:flex-row  flex-center" name='coreValues' id='coreValues'>
    <div className='flex flex-wrap gap-5  flex-center'>
        {coreValues.map((coreValue,index)=> (
    <CoreValueCard key={coreValue.id} {...coreValue} index={index}/>
        ))}
    </div>
</section>

  )
}

export default CoreValues