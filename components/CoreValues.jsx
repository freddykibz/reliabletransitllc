import CoreValueCard from "./CoreValueCard"
import { coreValues } from "@constants"

const CoreValues = () => {
  return (
    <section>
    <div className='flex flex-wrap gap-5 flex-center'>
        {coreValues.map((coreValue,index)=> (
    <CoreValueCard key={coreValue.id} {...coreValue} index={index}/>
        ))}
    </div>
</section>

  )
}

export default CoreValues