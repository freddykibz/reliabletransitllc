'use client'
import { useState } from "react";
import ServiceCarouselItem from "./ServiceCarouselItem";
import { ServiceItems } from "@constants";


const ServiceCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // const items = [
    //     {
    //         description: 'Lorem Lorem veniam incididunt et nulla enim. Non exercitation occaecat non sunt aute excepteur exercitation aute cillum mollit aliquip aliquip mollit. Deserunt eiusmod minim dolore irure ea fugiat culpa. Ullamco et sit amet adipisicing id Lorem consequat labore cupidatat sunt aliquip ea. Ex magna proident velit eiusmod id dolor quis. Ipsum aute magna proident incididunt voluptate ipsum. Amet incididunt cillum ut ut commodo ea.',
    //         icon: healthy
    //     },
    //     {
    //         description: 'Officia dolor anim veniam amet in anim aute occaecat occaecat incididunt consequat velit. Laboris labore proident cupidatat laboris dolore pariatur est voluptate quis mollit fugiat elit duis officia. Est quis excepteur consectetur duis culpa qui adipisicing cillum. Consequat anim Lorem et amet reprehenderit eu anim laboris.',
    //         icon: run
    //     },
    //     {
    //         description: 'Anim irure ad cupidatat nisi proident adipisicing irure fugiat quis. Elit proident quis adipisicing elit. Quis quis commodo est veniam. Lorem cillum anim anim irure. Excepteur ea sunt reprehenderit consectetur veniam nulla ex aliquip et. Velit laborum non irure nostrud labore ut et adipisicing.',
    //         icon: baseball
    //     }
    // ]
    
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= ServiceItems.length) {
          newIndex = ServiceItems.length - 1;
        }
    
        setActiveIndex(newIndex);
      };

  return (
    <div className="md:w-full px-20 carousel flex flex-center backgrounds">
        <div className="inner" 
            style={{ transform: `translate(-${activeIndex * 100}%)`
            }}
            >
            {ServiceItems.map((item) => {
                return (<ServiceCarouselItem key={item.id} item={item} width={"100%"}/>);
            })}
        </div>

        <div className="carousel_buttons flex flex-center ">
            <button onClick={()=> {
                updateIndex(activeIndex -1);
            }} className="button-arrow flex-center">
            <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <div className="indicators  flex-center">
                {ServiceItems.map((item, index) => {
                    return ( 
                        <button onClick={() => {
                            updateIndex(index);
                        }} className="indicator-buttons flex-center" key={item.id}>
                             <span className={`material-symbols-outlined  ${index=== activeIndex? "indicator-symbol-active":"indicator-symbol"} `}>radio_button_checked</span>
                        </button>
                    )
                })}
            </div>
            <button
          className="button-arrow flex-center"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        </div>
    </div>
  )
}

export default ServiceCarousel;