import Image from "next/image"
import { features } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row w-[550px] bg-gallery p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex-center bg-dimBlue`}>
      <Image 
      src={icon} 
      alt="star" 
      width={64}
      height={64}
      className="w-[50%] h-[50%] object-contain" />
    </div>
        <div className="flex flex-1  flex-col ml-3">
            <h4 className="font-medium text-picton-blue md:text-[32px] text-24 leading-[23px] mb-4">
                {title}
            </h4>
            <p className="font-normal break-normal break-words text-black text-[20px] leading-[24px] mb-1">
                {content}
            </p>

        </div>
       
    </div>
  )
}

export default FeatureCard