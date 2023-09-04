'use client'
import Stepper from '@components/Stepper'
import StepperControl from '@components/StepperControl'
import Complete from '@components/steps/Complete';
import PersonalDetails from '@components/steps/PersonalDetails';
import TripDetails from '@components/steps/TripDetails';
import { useState } from 'react';
import { StepperContext } from '@contexts/StepperContext';

const BookAppointment = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const[finalData, setFinalData] = useState([]);


  const steps =[
    "Personal Details",
    "Trip Details",
    "Complete"
  ];

  const displayStep = (step) => {
    switch(step){
      case 1:
        return<PersonalDetails/>
      case 2:
        return<TripDetails/>
      case 3:
        return<Complete/>
      default: 
  }
  }
  const handleClick = (direction)=>{
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    
    //check if steps are within bounds

    newStep > 0 && newStep <steps.length && setCurrentStep(newStep);
  }
  return (
    <div className='md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/* Stepper */}
      <div className='container horizontal mt-5'>
      <Stepper
        steps={steps}
        currentStep={currentStep}
      
      />
       {/* display Components */}
       <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData ,
          setFinalData
          }}>
       
           {displayStep(currentStep)}
        </StepperContext.Provider>
       </div>
      </div>
      
       {/* Navigation */}
       <StepperControl 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
       />
      
        
    </div>
  )
}

export default BookAppointment;
