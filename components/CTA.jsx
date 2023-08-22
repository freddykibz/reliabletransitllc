import Button from "./Button"

const CTA = () => {
  return (
    <section className="flex-center marginY padding sm:flex-row  bg-picton-blue-dark   flex-col rounded-[20px]vbox-shadow">
      <div className="flex flex-col">
        <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">Enquire Anytime!</h2>
        <p className="font-normal text-white text-[18px] leading-[30.8px]  mt-5">Experience Convenience and Care with Our Paratransit/NEMTS Services! Book Your Ride Today and Enjoy Safe, Reliable, and Accessible Transportation for All Your Needs.</p>
      </div>
      <div className="flex-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button/>
      </div>
    </section>
  )
}

export default CTA;