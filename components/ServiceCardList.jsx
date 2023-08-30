import ServiceCard from "./ServiceCards";
import { services } from "@constants";

const ServiceCardList = () => {
  return (
    <section className="flex flex-col md:flex-row">
        <div className='flex flex-wrap gap-5 flex-center'>
            {services.map((service,index)=> (
            <ServiceCard key={service.id} {...service} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default ServiceCardList;