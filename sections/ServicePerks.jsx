import Image from "next/image"

const ServicePerks = () => {
  return (
    <section className="flex mt-40 flex-col md:flex-row  gap-10 w-full">   
      <div className='flex-1 center'>
        <Image
          src="/assets/contact.jpg"
          width={640}
          height={540}
          alt="service perks"
        />
      </div>
     <div className="flex-1 flex-col flex-center">
     <h1 className="sect_head text-center"> WE ARE </h1>
        <div className="md:flex-start md:pl-40 flex-col gap-6">
           <div className="flex gap-4 md:py-4 py-2 ">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text ">Accessibility</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2 ">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text ">Reliability</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2 ">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
            <p className="list_text ">Professionalism</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2">
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text ">Safety</p>
           </div>
           <div className="flex gap-4 md:py-4 py-2"> 
           <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={32}
                height={32}
            />
           <p className="list_text ">Flexibility</p>
           </div>
          
         
        </div>
     </div>
    </section>
  )
}

export default ServicePerks;