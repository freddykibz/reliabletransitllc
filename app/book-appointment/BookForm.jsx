"use client"
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

const BookForm = () => {
  const[value, setValue] =useState()  
  const [date, setDate] = useState(new Date());
  const  [loading, setLoading] =useState(false)

  async function handleSubmit (event) {
      event.preventDefault();
      const data = {
        name: String(event.target.firstname.value),
        name: String(event.target.lastname.value),
        email: String (event.target.email.value),
        phone: String(event.target.phone.value),
        trip:String(event.target.trip.value),
        address: String(event.target.address.value),
        city: String(event.target.city.value),
        comment: String(event.target.comment.value),

  };
  const response = await fetch ("/api/booking", {
    method: 'POST',
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify(data),
});
  if (response.ok) {
    console.log("Message sent successfully");
    setLoading(false);
    // reset the form 
    event.target.firstname.value = "";
    event.target.lastname.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";
    event.target.trip.value="";
    event.target.address.value="";
    event.target.city.value="";
    event.target.comment.value="";
  }
  if(!response.ok) {
    console.log("Error sending message")
    setLoading(false)
  }
  
  }
  return (
          
    <section className="flex w-full mb-10 flex-col md:flex-row md:flex-center " name="booking">
    <form  className="flex flex-col md:flex-row w-full" onSubmit={handleSubmit}>
        <div className="flex-1 flex-col md:flex-row gap-3 ">
        <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-center md: flex-start my-4'>
                <label className="font-medium  font-lg text-deluge mb-2 " htmlFor='firstname'>First Name</label>
                <input 
                  type="text" 
                  minLength={3}
                  maxLength={150}
                  required 
                  className='px-3 py-4  w-full text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
                  autoComplete='off' id='firstname'
                  />
              </div>
              <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-center md: flex-start my-4'>
                <label className="font-medium  font-lg text-deluge mb-2 " htmlFor='lastname'>Last Name</label>
                <input 
                  type="text" 
                  minLength={3}
                  maxLength={150}
                  required 
                  className='px-3 py-4  w-full text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
                  autoComplete='off' id='lastname'
                  />
              </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12  flex-start my-4 '>
            <label className="font-medium font-lg text-deluge mb-2" htmlFor='phone'>Phone</label>
            <PhoneInput 
             defaultCountry="US"
             value={value}
             onChange={setValue}
              type="text" 
              minLength={12}
              maxLength={15}
              required 
              className=' w-full px-3 py-4 text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
                id='phone' />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12 start my-4 '>
            <label className="font-medium font-lg text-deluge mb-2" htmlFor='email'>Email</label>
            <input 
              type="email" 
              minLength={5}
              maxLength={150}
              required 
              className=' px-3 py-4 text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5  shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg w-full'  
              autoComplete='off' 
              id='email' />
          </div>
        </div>
        

        <div className="flex-1 flex-col flex-center md:mx-8 ">
        <div className='w-full flex flex-col md:flex-row gap-8 px-12   md:flex-start my-4 '>
            <label className="font-medium   mx-8 font-lg text-deluge mb-2 " htmlFor='trip'>Trip Date</label>
           <div>
               <DatePicker selected={date} onChange={(date) => setDate(date)} name="trip"  id="trip"  className='w-full rounded-[10px] md:w-1/2 flex-row'/>
           </div>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-start my-4 '>
            <label className="font-medium font-lg text-deluge  mx-8  mb-2 " htmlFor='address'>Address</label>
            <input 
              type="text" 
              minLength={3}
              maxLength={150}
              required 
              className='px-3 py-4  w-full text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
              autoComplete='off' 
              id='address'
              name= 'address' 
              />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12  md:flex-center  my-4 '>
            <label className="font-medium mx-8 flex-start  font-lg text-deluge mb-2 " htmlFor='city'>City</label>
            <input 
              type="text" 
              minLength={3}
              maxLength={150}
              required 
              className='mx-6 py-4  w-full text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
              autoComplete='off' 
              name='city'
              id='city' 
              />
          </div>
          
        <div className='w-full flex-col md:flex-row gap-8 px-2 flex-center md:flex-start my-6 '>
         <label className="hidden sm:block font-medium font-lg text-deluge mb-2 md:mx-8" htmlFor='comment'>Comment</label>
          <textarea 
            rows={8} 
            required
            name="comment"
            minLength={10}
            maxLength={500}
            placeholder='comments'
            className='text-lg  font-normal bg-gray-50 border-gray-300 w-3/4 md:w-3/4 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg'
            id='comment'
          />
      </div>
      <div className="flex-center w-full">
      <button type='submit'
       disabled={loading}
       className=' disabled:bg-gray-400  disabled:text-gray-100   w-3/4 md:w-1/2 px-14 py-4  md:px-8 flex-center md:py-4  bg-deluge text-white font-bold items-center rounded-full mt-4 mb-6'>Send</button>
      </div>
        </div>      
</form>
  </section>
  )
}

export default BookForm;