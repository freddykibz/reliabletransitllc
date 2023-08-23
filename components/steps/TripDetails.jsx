'use client'
import React, { useState } from "react";
import { useContext } from 'react';
import { StepperContext } from '@contexts/StepperContext';


const TripDetails = () => {
  const {userData, setUserData } = useContext(StepperContext);
  const [date, setDate] = useState("none");
  const onDateChange = (event) => {
     setDate(event.target.value);
  };
  const handleChange = (e)=> {
    const {name, value} = e.target;
    setUserData({ ...userData, [name]: value });
  }
  return (
    <div className='flex  flex-center  flex-col'>
    <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Street Address</div>
     <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
       <input onChange={handleChange} value={userData['name'] || ''} name="name" placeholder='Street Address'
         className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
     </div>
     
     </div>
     {/* Date */}
     <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Date</div>
     <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
       <input type="date" onChange={onDateChange} value={userData[{date}] || ''} name="date"  
         className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
     </div>
     
     </div>  
     {/* Time */}
     <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Time</div>
     <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
       <input onChange={handleChange} value={userData['time'] || ''} name="time" placeholder='Pickup Time'
         className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
     </div>
     
     </div>
     {/* Street Address */}
     <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Destination</div>
     <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
       <input onChange={handleChange} value={userData['destination'] || ''} name="destination" placeholder='Your Street Address'
         className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
     </div>
     
     </div>

 </div>
  )
}

export default TripDetails