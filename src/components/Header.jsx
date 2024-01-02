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
        <div className='bg-[url(../assets/image/headerBGImage.webp)] z-50 bg-cover bg-center w-full relative min-h-[810px] overflow-hidden'>
            <NavBar />
            <div className="container max-w-[539px] mt-[19px] flex flex-col items-center relative z-50">
                <div className="flex items-center gap-6">
                    <a target="_blank" href="http://twitter.com">
                        <TwiterIconHeader />
                    </a>
                    <a target="_blank" href="http://twitter.com">
                        <OpenSeaIconHeader />
                    </a>
                    <a target="_blank" href="http://twitter.com">
                        <OpenEyeIconHeader />
                    </a>
                    <a target="_blank" href="http://twitter.com">
                        <DiscordIconHeader />
                    </a>
                    <a target="_blank" href="http://twitter.com">
                        <MediumIconHeader />
                    </a>
                    <a target="_blank" href="http://twitter.com">
                        <TelegramIconHeader />
                    </a>
                </div>
                <h1 className="text-white font-AzoSansUber font-normal leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[65px] uppercase text-center mt-[39px]"><span className=" text-center">WELCOME</span><br /> TO <span className=" relative after:absolute after:left-0 after:w-full after:h-[5px] after:bottom-0 after:bg-[#FDDA60]">DomPKong</span></h1>
                <p className="font-normal font-Montserrat leading-[25px] text-center text-white mt-[14px]">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vita</p>
                <div className="flex gap-8 items-center mt-[35px]">
                    <CommonButton text="Whitepaper" />
                    <CommonButton text="Mint" />
                    <CommonButton text="Opensea" />
                </div>
            </div>
            <Image className=" absolute top-0 left-0 z-10 w-[40%]" src={LeftBel} alt="Left Bel"/>
            <Image className=" absolute top-0 right-0 z-10 w-[40%]" src={Rightbel} alt="right Bel"/>
            <Image className=" absolute bottom-0 right-0 z-20 w-[45%] translate-x-[47%]" src={whiteGorila} alt="white-gorila"/>
            <Image className=" absolute bottom-0 right-[9%] z-10 w-[30%]" src={SaudiGorila} alt="saudi-gorila"/>
            <Image className=" absolute bottom-0 right-[30%] z-10 w-[30%]" src={BlackGorila} alt="Black-gorila"/>
            <div className=" absolute top-0 -translate-y-1/2 z-0 left-0 right-0"><BlackShodowHeader /></div>
        </div>
    )
}

export default Header
