import Business from "@components/Business";
import CTA from "@components/CTA";
import HeroBanner from "@components/Hero";
import Stats from "@components/Stats";
import Testimonials from "@components/Testimonials";
import ValueStatement from "@components/ValueStatement";
import ContactForm from "./contact/ContactForm";
import ContactBlock from "@components/ContactBlock";
import Slider from "@components/slider";
import CoreValues from "@components/CoreValues";
import AboutUsInfo from "@sections/AboutUs";
import SectionTitleAbout from "@sections/SectionTitleAbout";
import SectionTitleCore from "@sections/SectionTitleCore";




const Home = () => {
  return (
    <div className="w-full relative">
      {/* <HeroBanner/> */}
      <Slider/>
      <ValueStatement/>
      <Business/>
      <Stats/>
       <SectionTitleAbout/>
      <AboutUsInfo/>
      <SectionTitleCore/>
      <CoreValues/>
      <Testimonials/>
      <CTA/>
      <h1 className="font-semibold xs:text-[48px] text-[24] md:text-[48px] text-picton-blue xs:leading-[76.8px] leading-[66.8px] w-full text-center py-6">GET IN TOUCH WITH US</h1>
      <ContactBlock/>
      <ContactForm/>
     
    </div>
    

  )
}

export default Home;