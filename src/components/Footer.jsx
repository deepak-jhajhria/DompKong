import Logo from '../assets/image/footerLogo.webp'
import Image from 'next/image'
import { DiscordIconFooter, MediumIconFooter, MintSecEllipseRight, OpenEyeIconFooter, OpenSeaIconFooter, TelegramIconFooter, TwiterIconFooter } from './Icons'
const Footer = () => {
    return (
        <div className=' overflow-hidden relative'>
            <div className=' absolute -bottom-[13%] -left-[12%]'><MintSecEllipseRight /></div>
            <div className='container max-w-[280px] sm:max-w-[310px] sm:px-0 mt-5 sm:mt-[40px]'>
                <Image className=' max-sm:max-w-[160px] mx-auto' src={Logo} alt='logo' />
                <div className='flex justify-around my-4 sm:my-5 md:my-6 lg:my-7'>
                    <a className='group' href="http://Twiter.com"><TwiterIconFooter /></a>
                    <a className='group' href="http://Twiter.com"><OpenSeaIconFooter /></a>
                    <a className='group' href="http://Twiter.com"><OpenEyeIconFooter /></a>
                    <a className='group' href="http://Twiter.com"><DiscordIconFooter /></a>
                    <a className='group' href="http://Twiter.com"><MediumIconFooter /></a>
                    <a className='group' href="http://Twiter.com"><TelegramIconFooter /></a>
                </div>
            </div>
            <p className='text-white font-normal font-Montserrat text-sm sm:text-base border-t w-full text-center pt-2 pb-3 sm:pt-4 sm:pb-[17px] border-t-white'>© DomPKong {(new Date().getFullYear())}</p>
        </div>
    )
}

export default Footer
