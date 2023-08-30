import Button from "./Button"

const CTA = () => {
  return (
    <section className="flex-center flex-col md:flex-row marginY padding sm:flex-row banner-bg  bg-deluge bg-cover rounded-[20px] vbox-shadow">
      <div className="flex flex-1   flex-col">
        <h2 className="font-semibold xs:text-[48px] text-[40px] text-center text-white xs:leading-[76.8px] leading-[66.8px] w-full">Enquire Anytime!</h2>
        <p className="font-normal text-white text-[20px] md:text-[24px]  leading-[30.8px]  mt-5">Experience Convenience and Care with Our Paratransit/NEMTS Services! Book Your Ride Today and Enjoy Safe, Reliable, and Accessible Transportation for All Your Needs.</p>
      </div>
      <div className=" flex-1 flex-center sm:ml-10 ml-0 sm:mt-0 mt-4  md:mt-10">
        <button className="py-4 px-6 bg-white font-semibold rounded-full text-deluge uppercase">Book Appointment</button>
      </div>
    </section>
  )
}

export default CTA;