import React from 'react'
import Logo from '../assets/image/FooterLogo.webp'
import Image from 'next/image'
import { DiscordIconFooter, MediumIconFooter, OpenEyeIconFooter, OpenSeaIconFooter, TelegramIconFooter, TwiterIconFooter } from './Icons'
const Footer = () => {
    return (
        <div>
            <div className='container max-w-[310px] sm:px-0 mt-[37px]'>
                <Image src={Logo} alt='logo' />
                <div className='flex justify-around my-7'>
                    <a href="http://Twiter.com"><TwiterIconFooter /></a>
                    <a href="http://Twiter.com"><OpenSeaIconFooter /></a>
                    <a href="http://Twiter.com"><OpenEyeIconFooter /></a>
                    <a href="http://Twiter.com"><DiscordIconFooter /></a>
                    <a href="http://Twiter.com"><MediumIconFooter /></a>
                    <a href="http://Twiter.com"><TelegramIconFooter /></a>
                </div>
            </div>
            <p className='text-white font-normal font-Montserrat text-base border-t w-full text-center pt-4 pb-5 border-t-white'>© DomPKong {(new Date().getFullYear())}</p>
        </div>
    )
}

export default Footer
