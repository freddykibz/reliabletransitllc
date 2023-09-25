import React from 'react'
import ImageSlider from './ImageSlider'
import { Container } from 'postcss'


const Slides = () => {
const slides =[
        {url:'/assets/wheel.png', title: 'wheelChair' },
        {url:'/assets/service-bg.png', title: 'Service' },
        {url:'/assets/schedule.png', title: 'Schedule' },
     
    ];
   const  ContainerStyles = {
    width: "500px",
    height:"280px",
    margin: "0 auto",
   };

  return (
    <div style={ContainerStyles}>
         <ImageSlider slides={slides} parentWidth={500}/>
    </div>
   
  )
}

export default Slides;