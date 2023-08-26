import { stats} from '../constants';


const Stats = () => {
  return (
    <section className='stat bg-pattern flex-row'>
        {stats.map((stat) => (
            <div key={stat.id} className='flex flex-1 flex-center flex-row m-3'>
                <h4 className='font-semibold xs:text-[40px] text-picton-blue text-[40px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
                <p className='font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3'>{stat.title}</p>
            </div>
        ))}

    </section>
  )
}

export default Stats