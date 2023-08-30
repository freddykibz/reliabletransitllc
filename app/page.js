import Business from "@components/Business";
import CTA from "@components/CTA";
import HeroBanner from "@components/Hero";
import Stats from "@components/Stats";
import Testimonials from "@components/Testimonials";
import ValueStatement from "@components/ValueStatement";
import ContactForm from "./contact/ContactForm";
import ContactBlock from "@components/ContactBlock";
import Slider from "@components/slider";


const Home = () => {
  return (
    <div className="w-full">
      <HeroBanner/>
      {/* <Slider/> */}
            <ValueStatement/>
      <Business/>
      <Stats/>
      <Testimonials/>
      <CTA/>
      <h1 className="font-semibold xs:text-[48px] text-[24] md:text-[48px] text-picton-blue xs:leading-[76.8px] leading-[66.8px] w-full text-center py-6">GET IN TOUCH WITH US</h1>
      <ContactForm/>
      <ContactBlock/>
    </div>
    

  )
}

export default Home;