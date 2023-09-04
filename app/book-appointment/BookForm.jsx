import React from 'react'

const BookForm = () => {
  return (
          
    <section className="flex  mb-10 flex-col md:flex-row md:flex-center " id="#contact" name="contact">
    <form  className="flex flex-col md:flex-row w-full">
        <div className="flex-1 flex-col md:flex-row  ">
            <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-center my-4 '>
            <label className="font-medium  font-lg text-deluge mb-2 " htmlFor='name'>Name</label>
            <input 
              type="text" 
              minLength={3}
              maxLength={150}
              required 
              className='px-3 py-4  w-full text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
              autoComplete='off' id='name' 
              />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12  flex-center my-6 '>
            <label className="font-medium font-lg text-deluge mb-2" htmlFor='name'>Phone</label>
            <input 
              type="text" 
              minLength={12}
              maxLength={15}
              required 
              className=' w-full px-3 py-4 text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
                id='phone' />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-center my-4 '>
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

        <div className="flex-1">
        <div className='w-full flex-col md:flex-row gap-12 px-2 flex-center  my-6 '>
      {/* <label className="font-medium font-lg text-picton-blue mb-2" htmlFor='message'>Message</label> */}
          <textarea 
            rows={8} 
            required
            name="message"
            minLength={10}
            maxLength={500}
            placeholder='Message'
            className='text-lg font-normal bg-gray-50 border-gray-300 w-3/4 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg '
          />
      </div>
      <div className="flex-center">
      <button type='submit'
   
       className=' disabled:bg-gray-400  disabled:text-gray-100   w-3/4 md:w-1/3 px-14 py-4  md:px-8 flex-center md:py-4  bg-deluge text-white font-bold items-center rounded-full mt-4 mb-6'>Send</button>
      </div>
        </div>      
</form>
  </section>
  )
}

export default BookForm