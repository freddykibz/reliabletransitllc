import React from 'react'
import BookForm from './BookForm';
import BookingBanner from '@components/BookingBanner';

const Booking = () => {
  return (
    <div className='w-full'>
      <BookingBanner/>
      <BookForm/>
    </div>
  )
}

export default Booking;