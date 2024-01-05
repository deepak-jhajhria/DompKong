import Image from "next/image"
import LeftBel from "../assets/image/leftBel.webp"
import Rightbel from "../assets/image/rightbel.webp"
import whiteGorila from '../assets/image/AlbertWhiteGorila.webp'
import SaudiGorila from '../assets/image/PrinceWhiteGoliraSaudi.webp'
import BlackGorila from '../assets/image/2PacBlackGorila.webp'
import CommonButton from "./CommonButton"
import { BlackShodowHeader, DiscordIconHeader, MediumIconHeader, OpenEyeIconHeader, OpenSeaIconHeader, TelegramIconHeader, TwiterIconHeader } from "./Icons"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div  className='bg-[url(../assets/image/headerBGImage.webp)] z-50 bg-cover bg-center w-full relative xs:min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[810px] overflow-hidden'>
            <NavBar />
            <div className="container max-w-[579px] mt-[19px] flex flex-col items-center relative z-50">
                <div className="flex items-center gap-4 sm:gap-6">
                    <a className=" duration-300 hover:scale-105 group" data-aos="zoom-in" data-aos-duration="2000" target="_blank" href="http://twitter.com">
                        <TwiterIconHeader />
                    </a>
                    <a className=" duration-300 hover:scale-105 group" data-aos="zoom-in" data-aos-duration="2000" target="_blank" href="http://twitter.com">
                        <OpenSeaIconHeader />
                    </a>
                    <a className=" duration-300 hover:scale-105 group" data-aos="zoom-in" data-aos-duration="2000" target="_blank" href="http://twitter.com">
                        <OpenEyeIconHeader />
                    </a>
                    <a className=" duration-300 hover:scale-105 group" data-aos="zoom-in" data-aos-duration="2000" target="_blank" href="http://twitter.com">
                        <DiscordIconHeader />
                    </a>
                    <a className=" duration-300 hover:scale-105 group" data-aos="zoom-in" data-aos-duration="2000" target="_blank" href="http://twitter.com">
                        <MediumIconHeader />
                    </a>
                    <a className=" duration-300 hover:scale-105 group" data-aos="zoom-in" data-aos-duration="2000" target="_blank" href="http://twitter.com">
                        <TelegramIconHeader />
                    </a>
                </div>
                <h1 data-aos="fade-right" data-aos-duration="2000" className="text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[65px] uppercase text-center mt-5 sm:mt-7 lg:mt-[39px]"><span className=" text-center">WELCOME</span><br /> TO <span className=" relative after:absolute after:left-0 after:w-full after:h-[3px] sm:after:h-[5px] after:bottom-0 after:bg-[#FDDA60] text-[#F1C85D]">DomPKong</span></h1>
                <p data-aos="fade-left" data-aos-duration="2000" className="font-normal font-Montserrat leading-5 sm:leading-[25px] text-center text-white mt-[14px] text-xs sm:text-base">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vita</p>
                <div data-aos="flip-up" data-aos-duration="1000" className="flex gap-2 xs:gap-4 flex-col xs:flex-row sm:gap-5 md:gap-7 lg:gap-8 items-center mt-3 md:mt-7 lg:mt-[35px] max-xs:pb-[90px]">
                    <CommonButton text="Whitepaper" />
                    <CommonButton text="Mint" />
                    <CommonButton text="Opensea" />
                </div>
            </div>
            <Image data-aos="fade-down-right" data-aos-duration="2000" className=" absolute top-0 left-0 z-10 max-xl:w-[40%]" src={LeftBel} alt="Left Bel"/>
            <Image data-aos="fade-down-left" data-aos-duration="2000" className=" absolute top-0 right-0 z-10 max-xl:w-[40%]" src={Rightbel} alt="right Bel"/>
            <Image  className=" absolute bottom-0 right-0 z-20 max-xl:w-[45%] translate-x-[47%]" src={whiteGorila} alt="white-gorila"/>
            <Image data-aos="fade-up-left" data-aos-duration="2000" className=" absolute bottom-0 right-[9%] z-10 max-xl:w-[30%]" src={SaudiGorila} alt="saudi-gorila"/>
            <Image data-aos="fade-up-left" data-aos-duration="2000" className=" absolute bottom-0 right-[30%] z-10 max-xl:w-[30%]" src={BlackGorila} alt="Black-gorila"/>
            <div className=" absolute top-0 -translate-y-[45%] z-0 left-0 right-0"><BlackShodowHeader /></div>
        </div>
    )
}

export default Header
