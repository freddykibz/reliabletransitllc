"use client"
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
// import videoBg from '../public/assets/bg-video.mp4';

const Slider = () => {
  return (
    <div className='w-full'>
      
  
      <div className='md:top-32 left-0 right-0  z-5 w-full'>
          <CldVideoPlayer
            width="1920"
            height="1080"
            src="https://res.cloudinary.com/dnwzxgsuc/video/upload/v1693404983/bg-vid_fdatxc.mp4"
            autoplayMode="on-scroll"
            data-cld-autoplay-mode="on-scroll"
            loop
            autoPlay 
            preload='auto'
            colors ={{
                accent:'#EEECEE',
                base: '#8370B7',
              text: '#29B2EC'
            }}
            
            />
        </div>  
       
        <div className='hidden sm:block vid-content'>
        <h1 className=" hidden sm:block md:text-8xl text-2xl uppercase top-20 left-0 sm:top-4 xs:0 text-white  md:font-extrabold font-medium bg-picton-blue-dark bg-opacity-25 abolute">
            Empowering Mobility Independence
         </h1>
        </div>
    </div>
       

    // <div className='videoContainer'>
    //     <video src='/assets/bg-vid.mp4'
    //     autoPlay loop muted
    //     width={1400}
    //     height={540}
    //     />

    // </div>
  )
}

export default Slider