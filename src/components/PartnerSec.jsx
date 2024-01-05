import Image from 'next/image'
import ImageLogo1 from '../assets/image/FannieMaeLogo.webp'
import ImageLogo2 from '../assets/image/NFTCalendarLogo.webp'
import ImageLogo3 from '../assets/image/NebraskaMartLogo.webp'
import ImageLogo4 from '../assets/image/NFTeveningLogo.webp'
const PartnerSec = () => {
  return (
    <div className='container max-w-[1140px] mt-1 overflow-hidden'>
      <h2 data-aos="fade-right" data-aos-duration="2000" className='text-white text-center font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>Partners</h2>
      <div className=' grid grid-cols-2 justify-center xl:grid-cols-4 my-5 sm:my-8 lg:my-[52px] items-center w-full max-xl:gap-5 '>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center h-full items-center relative max-xl:after:hidden max-xl:before:hidden after:absolute after:h-full after:w-[2px] after:bg-[#FDDA60] after:right-4 after:rotate-12 before:bg-[#FDDA60] before:absolute before:w-[4px] before:blur-sm before:right-4 before:h-full before:rotate-12'>
          <Image className='xl:mr-5 duration-300 hover:brightness-100 hover:contrast-125 hover:sepia hover:scale-105' src={ImageLogo4} alt='fanniaMae'/>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center h-full items-center relative max-xl:after:hidden max-xl:before:hidden after:absolute after:h-full after:w-[2px] after:bg-[#FDDA60] after:right-4 after:rotate-12 before:bg-[#FDDA60] before:absolute before:w-[4px] before:blur-sm before:right-4 before:h-full before:rotate-12 px-5'>
          <Image className='duration-300 hover:brightness-100 hover:contrast-125 hover:sepia hover:scale-105 sm:px-5' src={ImageLogo2} alt='fanniaMae2'/>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center h-full items-center relative max-xl:after:hidden max-xl:before:hidden after:absolute after:h-full after:w-[2px] after:bg-[#FDDA60] after:right-4 after:rotate-12 before:bg-[#FDDA60] before:absolute before:w-[4px] before:blur-sm before:right-4 before:h-full before:rotate-12 px-5'>
          <Image className='duration-300 hover:brightness-100 hover:contrast-125 hover:sepia hover:scale-105 sm:px-5' src={ImageLogo3} alt='fanniaMae3'/>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center items-center'>
          <Image className='duration-300 hover:brightness-100 hover:contrast-125 hover:sepia hover:scale-105 sm:px-5' src={ImageLogo1} alt='fanniaMae4'/>
        </div>
      </div>
    </div>
  )
}

export default PartnerSec
