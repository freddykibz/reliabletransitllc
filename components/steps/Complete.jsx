import React from 'react'

const Complete = () => {
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
        <div className='text-green-400'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="144" height="144" viewBox="0,0,256,256"
        style="fill:#000000;">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#4caf50"></path><path d="M34.602,14.602l-13.602,13.597l-5.602,-5.598l-2.797,2.797l8.399,8.403l16.398,-16.402z" fill="#ccff90"></path></g></g>
        </svg>
        </div>
        <div className='mt-3 text-xl font-semibold uppercase text-gray-500 '>
          Your Booking Has Been Received
        </div>
        <a className='mt-10' href="/">
          <button className='h-10 px-5 text-green-700 transition-colors duration-150 border-gray-300 rounded-lg
          focus:shadow-outline hover:bg-green-500 hover:text-green-100'>Close</button>
        </a>
      </div>

    </div>
  )
}

export default Complete