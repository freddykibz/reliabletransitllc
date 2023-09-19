'use client'
import Image from "next/image"

const ServiceCarouselItem = ({ item }) => {
  return <div className="carousel-item">
    <div></div>
    <Image
    //  className="carousel_img"
     src={item.icon}
    //  style={{ width: width }}
     width={250}
     height={350}
     alt={item.title}
     />
    <div className="carousel_item_text" >
        {item.description}
    </div>
    </div>
    
  
}

export default ServiceCarouselItem