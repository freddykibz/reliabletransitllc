import Image from "next/image"
import { services } from "@constants"

const ServiceCard = ({ icon, title, content, index }) => {
  return (
    <div className="shadow-sm">
        <div className= {`flex  bg-gallery flex-row p-6 rounded-[40px] ${ index !== services.length - 1  ? "mb-6" : "mb-0"} service-card`}>
        <div className={`w-[240px] h-[120px] rounded mt-4 flex-center `}>
            <Image
            src={icon}
            width={120}
            height={120}
            alt="icon"
           
            />
        </div>
        <div className="flex flex-1 mt-6 flex-col ml-3">
            <h4 className="text-center text-picton-blue font-semibold  uppercase text-[20px] md:text-[24px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-normal text-center break-normal text-gray-500 text-[18px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
    </div>
  )
}
export default ServiceCard;