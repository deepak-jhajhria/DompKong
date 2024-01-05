import FaqSec from './FaqSec'
import Footer from './Footer'
import MIntUprShadow from '../assets/image/MintUprShodow.webp'
import Image from 'next/image'
import { MintSecEllipseLeft } from './Icons'
const FaqFooter = () => {
    return (
        <div className='bg-[url(../assets/image/footerBg.webp)] bg-cover bg-center mt-12 sm:mt-16 md:mt-24 lg:mt-[120px] xl:mt-[141px] relative'>
            <div className=' absolute top-0'><Image src={MIntUprShadow} alt='Shadow' /></div>
            <div className=' absolute top-[15%] left-0'><MintSecEllipseLeft /></div>
            <FaqSec />
            <Footer />
        </div>
    )
}

export default FaqFooter
