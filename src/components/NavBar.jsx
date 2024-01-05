import Image from 'next/image'
import logo from '../assets/image/logo.webp'
import CommonButton from './CommonButton'
const NavBar = () => {
    return (
        <nav className='container max-w-[1140px] flex justify-end pt-[6px] relative z-30 overflow-hidden'>
            <div className='w-full md:w-1/2 flex justify-between items-center'>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <Image  className=' max-xs:w-[80px] md:-translate-x-1/2' src={logo} alt='logo' />
                </div>
                <div  data-aos="flip-up" data-aos-duration="2000">
                    <CommonButton text="cONNECT wALLET" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
