import Image from 'next/image'
import logo from '../assets/image/logo.webp'
import CommonButton from './CommonButton'
const NavBar = () => {
    return (
        <nav className='container max-w-[1140px] flex justify-end pt-[6px] relative z-30'>
            <div className='w-[55%] flex justify-between items-center'>
                <Image src={logo} alt='logo' />
                <CommonButton text="cONNECT wALLET" />
            </div>
        </nav>
    )
}

export default NavBar
