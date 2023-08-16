import Business from "@components/Business";
import CTA from "@components/CTA";
import HeroBanner from "@components/Hero";
import Stats from "@components/Stats";
import Testimonials from "@components/Testimonials";
import ValueStatement from "@components/ValueStatement";


const Home = () => {
  return (
    <div className="w-full">
      <HeroBanner/>
      <ValueStatement/>
      <Business/>
      <Stats/>
      <Testimonials/>
      <CTA/>
    </div>
    

  )
}

export default Home;