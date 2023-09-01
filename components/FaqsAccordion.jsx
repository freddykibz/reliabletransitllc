import React from 'react'
import { faqsData } from "@constants";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { Collapse } from 'react-collapse';

const FaqsAccordion = (open, toggle,question,answer) => {
  return (
    <div className='pt-[10px]'>
       <div className='bg-white py-[25px] px-[50] flex flex-center cursor-pointer onClick={toggle}'>
         <p className='text-[22px] font-semibold'> {question}</p>
         <div className='text-[30px]'>
            {open ? <AiOutlineMinus/> : <AiOutlinePlus/> }
         </div>
       </div>

       <Collapse isOpened={open}>
         <div className='bg-white px-[50px] pb-[20px]'>{answer}</div>
       </Collapse>
      </div>
    
  )
}

export default FaqsAccordion