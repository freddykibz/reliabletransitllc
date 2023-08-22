import { feedback } from "@constants";
import FeedBackCard from './FeedBackCard.jsx'

const Testimonials = () => {
  return (
    <section className="flex flex-center sm:py-16 py-6 flex-col relative bg-deluge">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full gradient" />
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb:16 mb-6 relative z-[1]">
          <h1 className="font-semibold xs:text-[48px] text-[40px] text-deluge xs:leading-[76.8px] leading-[66.8px] w-full">what people are <br className="sm:block hidden"/>saying about us</h1>
          <div className="w-full md:mt-0 mt-6">
            <p className=" font-normal  text-[18px] leading-[30.8px] text-left max-w-[450px]">Reliable paratransit and NEMTS services, ensuring seamless transportation solutions for diverse needs.</p>
          </div>
          </div>  
          <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container">
            {feedback.map((card) => (
              <FeedBackCard key={card.id} {...card} />
            ))}
          </div>
    </section>
  )
}

export default Testimonials