'use client'
import Image from "next/image"

const ServiceCarouselItem = ({ item }) => {
  return <div className="carousel-item flex-col flex flex-center">
    <div></div>
    <Image
     className="carousel_img"
     src={item.icon}
    //  style={{ width: width }}
     width={150}
     height={350}
     alt={item.title}
     
     />
    <div className="w-3/4 md:w-full carousel_item_text flex text-center mt-4 px-12" >
        {item.description}
    </div>
    </div>
    
  
}

export default ServiceCarouselItem