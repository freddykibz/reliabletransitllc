'use client'
import FaqsAccordion from "@components/FaqsAccordion";
import { faqsData } from "@constants";
import { useState } from "react";

const [open, setOpen] = useState(false)

const toggle =(index) => {
  if(open === index) {
    return setOpen(null)
  }
  setOpen(index)
}

const Faqs = () => {
  return (
    <section className="bg-deluge w-full h-screen grid flex-center">
      <div className="px-[40px] max-w-[800px]">
        <h1>Frequently Asked Questions</h1><br/>
        {faqsData.map((data, index) => {
          return <FaqsAccordion  
                      key={index} 
                      open={index === open } 
                      question={data.question}
                       answer={data.answer} 
                       toggle={()=>toggle(index)} />
        })}

      </div>
      <div></div>
    </section>
  )
}

export default Faqs;