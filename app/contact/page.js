
import React from 'react'
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className='flex flex-col w-full mx-auto flex-center px-4 mt-20'>
        <h1 className='head_text text-center'>Contact Us</h1>  
        <ContactForm/>   
    </div>
  )
}

export default ContactPage;