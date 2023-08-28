import Image from "next/image"
import { services } from "@constants"

const ServiceCard = ({ icon, title, content, index }) => {
  return (
    <div className= {`flex bg-deluge flex-row p-6 rounded-[40px] ${ index !== services.length - 1  ? "mb-6" : "mb-0"} service-card`}>
        <div className={`w-[64px] h-[64px] rounded-full flex-center bg-white `}>
            <Image
            src={icon}
            width={140}
            height={140}
            alt="icon"
            className="w-[50%] h-[50%] object-contain"
            />
        </div>
        <div className="flex flex-1  flex-col ml-3">
            <h4 className="text-center text-white font-medium  uppercase text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-normal break-normal text-black text-[16px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
  )
}
export default ServiceCard;