import Image from "next/image"
import { coreValues } from "../constants"

const CoreValueCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 core-card rounded-full ${index !== coreValues.length - 1 ? "mb-6" : "mb-0"} `}>
        <div className="flex flex-1 w-full  md:backdrop:flex-center flex-col ml-3">
            <h4 className=" font-medium md:font-semibold bg-deluge text-white flex-center py-4 px-4  rounded-full text-[18px] md:text-[26px] leading-[23px] md:leading-[40.2px] mb-1">
                {title}
            </h4>
            <p className="font-normal break-normal text-deluge text-[16px] md:text-[22px] leading-[24px]  md:leading-[30px]     mb-1 mt-8">
                {content}
            </p>

        </div>
       
    </div>
  )
}

export default CoreValueCard