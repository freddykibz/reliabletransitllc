import { useContext } from 'react';
import { StepperContext } from '@contexts/StepperContext';

const PersonalDetails = () => {

  const {userData, setUserData } = useContext(StepperContext);
  const handleChange = (e)=> {
    const {name, value} = e.target;
    setUserData({ ...userData, [name]: value });
  }
  return (
    <div className='flex  flex-center  flex-col'>
       <div className='w-1/2 mx-2 flex-1'>
         <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Name</div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input onChange={handleChange} value={userData['name'] || ''} name="name" placeholder='Your Name'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
        </div>
        
        </div>
        {/* Email */}
        <div className='w-1/2 mx-2 flex-1'>
         <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Email</div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input onChange={handleChange} value={userData['email'] || ''} name="email" placeholder='Enter Your Email'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
        </div>
        
        </div>  
        {/* phone */}
        <div className='w-1/2 mx-2 flex-1'>
         <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Phone Number</div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input onChange={handleChange} value={userData['phone'] || ''} name="phone" placeholder='Your Phone Number'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
        </div>
        
        </div>
    </div>
  )
}

export default PersonalDetails