import { stats} from '../constants';


const Stats = () => {
  return (
    <section className='stat  bg-gallery mb-0  bg-opacity-50  py-12 flex-col flex-wrap md:flex-row'>
        {stats.map((stat) => (
            <div key={stat.id} className='flex flex-1 flex-center flex-col md:flex-row m-3'>
                <h4 className='md:font-medium font-medium  xs:text-[40px] text-picton-blue  text-[24px] md:text-[40px] xs:leading-[53px] leading-[24px]  md:leading-[43px]'>{stat.value}</h4>
                <p className='font-medium xs:text-[20px]  text-deluge md:text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3'>{stat.title}</p>
            </div>
        ))}

    </section>
  )
}

export default Stats