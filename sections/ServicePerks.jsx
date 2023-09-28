import Image from "next/image"

const ServicePerks = () => {
  return (
    <section className="flex mt-40 flex-col md:flex-row flex-center gap-10 w-full ">   
      <div className='flex-1 w-full ml-4 flex-center'>
        <Image
          src="/assets/contact.jpg"
          width={640}
          height={540}
          alt="service perks"
          className="w-full blur-md filter brightness-40"
        />
      </div>
     <div className="flex-1 flex-col flex-center bg-purple-600">
     <h1 className="sect_head text-center text-picton-blue">WE ARE</h1>
        <div className=" w-full flex-center md:flex-start md:pl-40 flex-col gap-6 ">
           <div className="w-full flex gap-4 md:py-4 py-2 flex-center">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}

            />
           <p className="list_text">Accessible</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2 flex-center">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text">Reliable</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2 flex-center ">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
            <p className="list_text">Professional</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2 flex-center">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text">Safety Oriented </p>
           </div>
           <div className="flex gap-4 md:py-4 py-2 flex-center"> 
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text">Flexible</p>
           </div>
          
         
        </div>
     </div>
    </section>
  )
}

export default ServicePerks;