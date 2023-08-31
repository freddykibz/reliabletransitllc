import { faqs } from "@constants";
import Image from "next/image";

const Faqs = () => {
  return (
    <section>
      <div className="px-[40px] max-w-[800px]">
        {faqs.map((data, index) => {
          return <faqsItem/>
        })}

      </div>
      <div></div>
    </section>
  )
}

export default Faqs;