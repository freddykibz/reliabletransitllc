"use client"
export default function ContactForm(){
    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
          name:event.target.name.value,
          phone:event.target.phone.value,
          email:event.target.email.value,
          message:event.target.message.value
        }
        const response = await fetch ("/api/contact", {
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfully");
        }
        if(!response.ok) {
            console.log("Error sending message")
        }
      }
    return(
        <form onSubmit={handleSubmit} className="w-full md:w-3/5   md:flex-center items-center mt-0  justify-center">
    
           <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-center my-4 '>
            <label className="font-medium  font-lg text-picton-blue mb-2 " htmlFor='name'>Name</label>
            <input 
              type="text" 
              minLength={3}
              maxLength={150}
              required 
              className='px-3 py-4   text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
              autoComplete='off' id='name' 
              />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12  flex-center my-6 '>
            <label className="font-medium font-lg text-picton-blue mb-2" htmlFor='name'>Phone</label>
            <input 
              type="text" 
              minLength={12}
              maxLength={15}
              required 
              className='px-3 py-4 text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg ' 
               id='phone' />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-8 px-12 flex-center my-4 '>
            <label className="font-medium font-lg text-picton-blue mb-2" htmlFor='email'>Email</label>
            <input 
             type="email" 
             minLength={5}
             maxLength={150}
             required 
             className='px-3 py-4 text-lg font-normal bg-gray-50 border-gray-300 md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg w-full'  
             autoComplete='off' 
             id='email' />
          </div>
          <div className='w-full flex flex-col md:flex-row gap-12 px-6 flex-center my-6 '>
          <label className="font-medium font-lg text-picton-blue mb-2" htmlFor='message'>Message</label>
              <textarea 
                rows={6} 
                required
                name="message"
                minLength={10}
                maxLength={500}
                placeholder='Message'
                className='text-lg font-normal bg-gray-50 border-gray-300 w-full md:w-3/5 shadow-sm focus:ouline-none focus:border-deluge focus:ring-1  focus:ring-deluge rounded-lg '
              />
          </div>
          <div className="flex-center">
          <button type='submit' className=' w-full md:w-1/3 px-14 py-4  md:px-8 flex-center md:py-4  bg-deluge text-white font-bold items-center rounded-full mt-4'>Send</button>
          </div>
        
        
        </form>
    )
}