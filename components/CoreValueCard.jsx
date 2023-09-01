import Image from "next/image"
import { coreValues } from "../constants"

const CoreValueCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== coreValues.length - 1 ? "mb-6" : "mb-0"} core-card`}>
    {/* <div className={`w-[64px] h-[64px] rounded-full flex-center bg-dimBlue`}>
      <Image 
      src={icon} 
      alt="star" 
      width={64}
      height={64}
      className="w-[50%] h-[50%] object-contain" />
    </div> */}
        <div className="flex flex-1 w-full  flex-col ml-3">
            <h4 className="font-semibold bg-white text-deluge  padding   text-[24px] md:text-[32px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-normal break-normal text-gallery-light text-[16px] md:text-[22px] leading-[24px]  md:leading-[30px]     mb-1 mt-8">
                {content}
            </p>

        </div>
       
    </div>
  )
}

export default CoreValueCard