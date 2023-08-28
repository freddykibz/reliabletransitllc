import Image from "next/image"

const ServicePerks = () => {
  return (
    <section className="flex mt-40 flex-col md:flex-row  gap-10 w-full">   
      <div className='flex-1 flex-center'>
        <Image
          src="/assets/contact.jpg"
          width={640}
          height={540}
          alt="service perks"
        />
      </div>
     
      <div className='flex-1 px-10 flex-col'>
      <h1 className="sect_head text-center uppercase"> We Got You </h1>
       <div className="flex">
       <ul className="flex-start flex-col list-style-none ">
          <div className="flex flex-row gap-2 mt-4 ">
            <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={48}
                height={48}
            />
            <li className="text-black text-4xl flex-center">
            Easy Payment
            </li>
          </div>
          <div className="flex flex-row gap-2 mt-4 ">
            <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={48}
                height={48}
            />
            <li 
              className="text-black  text-4xl   flex-center"
            >
            Easy Payment
            </li>
          </div>
          <div className="flex flex-row gap-2 mt-4 ">
            <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={48}
                height={48}
            />
            <li 
              className="text-black  text-4xl   flex-center"
            >
            Easy Payment
            </li>
          </div>
          <div className="flex flex-row gap-2 mt-4 ">
            <Image 
                src="assets/check.svg"
                alt="checkmark"
                width={48}
                height={48}
            />
            <li 
              className="text-black  text-4xl   flex-center"
            >
            Easy Payment
            </li>
          </div>
          
          
          
        </ul>
       </div>
       
      </div>
    </section>
  )
}

export default ServicePerks;