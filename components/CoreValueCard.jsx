import Image from "next/image"
import { coreValues } from "../constants"

const CoreValueCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== coreValues.length - 1 ? "mb-6" : "mb-0"} core-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex-center bg-dimBlue`}>
      <Image 
      src={icon} 
      alt="star" 
      width={64}
      height={64}
      className="w-[50%] h-[50%] object-contain" />
    </div>
        <div className="flex flex-1  flex-col ml-3">
            <h4 className="font-semibold text-picton-blue text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-normal break-normal text-gallery-dark-shade text-[16px] leading-[24px] mb-1">
                {content}
            </p>

        </div>
       
    </div>
  )
}

export default CoreValueCard