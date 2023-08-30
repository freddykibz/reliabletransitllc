
// import videoBg from '../public/assets/bg-video.mp4';

const Slider = () => {
  return (
    <div className='videoContainer'>
        <video src='/assets/bg-vid.mp4'
        autoPlay loop muted
        width={1400}
        height={540}
        />

    </div>
  )
}

export default Slider