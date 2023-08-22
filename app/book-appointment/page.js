import Stepper from '@components/Stepper'
import StepperControl from '@components/StepperControl'
import React from 'react';

const BookAppointment
 = () => {
  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/* Stepper */}
      <Stepper/>

       {/* Navigation */}
       <StepperControl/>
      
        
    </div>
  )
}

export default BookAppointment
