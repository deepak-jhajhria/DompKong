import Image from 'next/image'
import ImageLogo1 from '../assets/image/FannieMaeLogo.webp'
import ImageLogo2 from '../assets/image/NFTCalendarLogo.webp'
import ImageLogo3 from '../assets/image/NebraskaMartLogo.webp'
import ImageLogo4 from '../assets/image/NFTeveningLogo.webp'
const PartnerSec = () => {
  return (
    <div className='container max-w-[1140px] mt-5'>
      <h2 className='text-white text-center font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>Partners</h2>
      <div className=' grid grid-cols-4 my-[52px] items-center w-full'>
        <div className='flex h-full items-center relative after:absolute after:h-full after:w-[2px] after:bg-[#FDDA60] after:right-4 after:rotate-12 before:bg-[#FDDA60] before:absolute before:w-[4px] before:blur-sm before:right-4 before:h-full before:rotate-12'>
          <Image src={ImageLogo4} alt='fanniaMae'/>
        </div>
        <div className='flex h-full items-center relative after:absolute after:h-full after:w-[2px] after:bg-[#FDDA60] after:right-4 after:rotate-12 before:bg-[#FDDA60] before:absolute before:w-[4px] before:blur-sm before:right-4 before:h-full before:rotate-12 px-5'>
          <Image src={ImageLogo2} alt='fanniaMae'/>
        </div>
        <div className='flex h-full items-center relative after:absolute after:h-full after:w-[2px] after:bg-[#FDDA60] after:right-4 after:rotate-12 before:bg-[#FDDA60] before:absolute before:w-[4px] before:blur-sm before:right-4 before:h-full before:rotate-12 px-5'>
          <Image src={ImageLogo3} alt='fanniaMae'/>
        </div>
        <div>
          <Image src={ImageLogo1} alt='fanniaMae'/>
        </div>
      </div>
    </div>
  )
}

export default PartnerSec
