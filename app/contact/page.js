'use client'

import Head from 'next/head'

import { useFormik } from 'formik';
import * as Yup from "yup"; 
import { useRouter } from 'next/navigation';
import ContactInfo from '@components/ContactInfo';
import { FaPaperPlane } from "react-icons/fa";



const ContactUs = () => {
  //Router
  const router = useRouter();

  //formik logics
 const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      message: "",
      policy:"",
    },
  // validate Form
  validationSchema: Yup.object({
  name: Yup.string()
    .max(20, 'Name must be 20 characters or less.')
    .required('Name is required'),
  email: Yup.string()
         .email('invalid email address') 
         .required('Email is required'),
  message: Yup.string()
  .required('Name is required'),
  policy:Yup.array().required('Privacy Policy Read must be checked'),
  }),
    //submit  Form

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
 });

 
  return (
    <div className='flex-center w-full '>
      <Head>
      <title>Modern React Forms</title>
      <meta name="description" content="Modern React Forms"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>   
      <main className='h-screen flex  flex-center '>
        <ContactInfo/>
      <form  
        onSubmit={formik.handleSubmit}  
        className='bg-white flex rounded-lg w-[840px] font-latoRegular padding-x'>
        <div className='flex-1 text-gray-700 p-20 ' >
          <h1 className='text-3xl pb-2 font-latoBold text-center'> GET IN TOUCH </h1>
          <p className='text-lg text-gray-500 text-center'> You can Contact us Anytime at <a className="underline" href="mailto:info@reliabletransitllc.org"></a>info@reliabletransitllc.org<br/> or through this form</p>
          <div className='mt-6'>
            {/* {name input field} */}
            <div className='pb-4 '>
              <label 
                  className={`block font-latoBold text-sm pb-2  ${
                    formik.touched.name && formik.errors.name 
                    ? "text-red-400" 
                    :""
                  }`} 
                  htmlFor='name'
                 >{ formik.touched.name && formik.errors.name 
                  ? formik.errors.name 
                  : "Name" }
                  </label>
            <input 
                className='border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-picton-blue focus:ring-picton-blue'
                type="text" 
                name="name" 
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Your Name" 
                onBlur={formik.handleBlur}
                />
            </div>
            {/*  Email Field */}
            <div className='pb-4'>
              <label  className={`block font-latoBold text-sm pb-2 ${
                formik.touched.email && formik.errors.email 
                ? "text-red-400":""}`}
               htmlFor='email'>{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
            <input 
                className='border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-picton-blue focus:ring-picton-blue'
                type="email" 
                name="email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                placeholder="Enter Your Email" />
            </div>
            {/*  Message Field */}
            <div className='pb-4'>
              <label 
              className='block font-latoBold text-sm pb-2' 
              htmlFor='message'>Message
              </label>
            <textarea 
               className='border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-picton-blue focus:ring-picton-blue'
               type="text"
               name="message"
               value={formik.values.message}
               onChange={formik.handleChange}
               placeholder="Write Your Message" 
               onBlur={formik.handleBlur}
            />                
            </div>
             {/*  Terms of Service*/}
             <div className='pb-4'>
              <label className={`block font-latoBold text-sm pb-2 ${formik.touched.policy && formik.errors.policy ? "text-red-400":""}`}
               htmlFor='policy'>{formik.touched.policy && formik.errors.policy ? formik.errors.policy : "Privacy Policy" }</label>
            <div className='flex items-center gap-2'>
               <input 
               type="checkbox"
               name='policy'
               value='checked'
               onChange={formik.handleChange}
               className='h-5 w-5 text-picton-blue focus:border-picton-blue focus:ring-picton-blue' 
               />
               <p className="text-sm font-latoBold text-gray-500">
                    I have Read the Privacy Policy and Agree
                  </p>
            </div>
            </div>
           <button 
             type="submit"
             className='bg-picton-blue font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-1/2 '
             
             >Send</button>
          </div>
        </div>
      </form>

    </main>
    
    </div>
  )
}

export default ContactUs