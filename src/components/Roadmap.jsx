import Pac2 from '../assets/image/2Pac.webp'
import PacBorder from '../assets/image/borderroadmap.png'
import Image from 'next/image'
import { RoadmapLineIcon, RoadmapLineIcon2, RoadmapLineIcon3, RoadmapLineIcon4, RoadmapLineIcon5 } from './Icons'
import CommonButton from './CommonButton'
const Roadmap = () => {
    return (
        <div className=" container max-w-[1140px] mt-2 xl:pb-0 overflow-x-hidden">
            <h2 data-aos="fade-up" data-aos-duration="2000" className="text-white text-center font-azo text-[50px] sm:text-[64px] font-normal pt-4 md:pt-10 lg:pt-16 xl:pt-[84px] pb-2 sm:pb-7 lg:pb-10 xl:pb-[71px]">Roadmap</h2>
            <div className="min-h-[558px] flex flex-wrap justify-center">
                <div data-aos="fade-right" data-aos-duration="2000" className="w-[100%] xl:w-[36%] pb-6 xl:pb-0 xl:min-h-[558px] flex items-center relative justify-center xl:justify-start">
                    <Image className=' xl:-translate-x-10' src={Pac2} alt='PacImage' />
                    <div className='absolute left-[-20%] top-[1%]'>
                        <Image className=" xl:block hidden w-full max-w-[550px] min-h-[550px]" src={PacBorder} alt='BorderImage' />
                    </div>
                </div>
                <div className="w-full xl:w-[64%] relative flex flex-col gap-6">
                    <div className="flex items-center xl:max-w-[903px] xl:absolute xl:top-[0] xl:left-[-24%] group">
                        <RoadmapLineIcon />
                        <div data-aos="fade-down" data-aos-duration="2000" className=" w-12 md:w-[76px] h-12 md:h-[76px] bg-white text-black font-Montserrat text-sm md:text-base sm:text-lg lg:text-xl font-black rounded-[50%] flex justify-center items-center xl:ml-2 mr-4 sm:mr-6 md:mr-8 xl:mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)] duration-300">20%</div>
                        <div className="flex flex-col gap-[5px] sm:gap-2 xl:max-w-[593px]">
                            <h3 data-aos="fade-left" data-aos-duration="2000" className="text-white font-azo text-base sm:text-lg lg:text-xl font-normal">Phase 1</h3>
                            <p data-aos="fade-up-left" data-aos-duration="2000" className="text-white font-Montserrat text-xs sm:text-base font-normal">Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full xl:max-w-[806px] xl:absolute xl:top-[20%] xl:left-[-8%] group">
                        <RoadmapLineIcon2 />
                        <div data-aos="fade-down" data-aos-duration="2000" className=" w-12 md:w-[76px] h-12 md:h-[76px] bg-white text-black font-Montserrat text-sm md:text-base sm:text-lg lg:text-xl font-black rounded-[50%] flex justify-center items-center xl:ml-[41px] mr-4 sm:mr-6 md:mr-8 xl:mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)] duration-300">
                            40%
                        </div>
                        <div className="flex flex-col gap-[5px] sm:gap-2 xl:max-w-[593px]">
                            <h3 data-aos="fade-left" data-aos-duration="2000" className="text-white font-azo text-base sm:text-lg lg:text-xl font-normal">
                                Phase 2
                            </h3>
                            <p data-aos="fade-up-left" data-aos-duration="2000" className="text-white font-Montserrat text-base font-normal">
                                Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                                euismod sed ultricies arcu ullamcorper
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center w-full xl:max-w-[779px] xl:absolute xl:top-[40%] xl:left-[-4%] group">
                        <RoadmapLineIcon3 />
                        <div data-aos="fade-down" data-aos-duration="2000" className=" w-12 md:w-[76px] h-12 md:h-[76px] bg-white text-black font-Montserrat text-sm md:text-base sm:text-lg lg:text-xl font-black rounded-[50%] flex justify-center items-center xl:ml-[54px] mr-4 sm:mr-6 md:mr-8 xl:mr-[43px] shrink-0 group-hover:bg-[#FDDA60] duration-300 group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)]"> 60%</div>
                        <div className="flex flex-col gap-[5px] sm:gap-2 xl:max-w-[593px]">
                            <h3 data-aos="fade-left" data-aos-duration="2000" className="text-white font-azo text-base sm:text-lg lg:text-xl font-normal">Phase 3</h3>
                            <p data-aos="fade-up-left" data-aos-duration="2000" className="text-white font-Montserrat text-base font-normal">Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris.</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full xl:max-w-[794px] xl:absolute xl:bottom-[25%] xl:left-[-7%] group">
                        <RoadmapLineIcon4 />
                        <div data-aos="fade-down" data-aos-duration="2000" className=" w-12 md:w-[76px] h-12 md:h-[76px] bg-white text-black font-Montserrat text-sm md:text-base sm:text-lg lg:text-xl font-black rounded-[50%] flex justify-center items-center xl:ml-[41px] mr-4 sm:mr-6 md:mr-8 xl:mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)] duration-300">80%</div>
                        <div className="flex flex-col gap-[5px] sm:gap-2 xl:max-w-[593px]">
                            <h3 data-aos="fade-left" data-aos-duration="2000" className="text-white font-azo text-base sm:text-lg lg:text-xl font-normal">Phase4</h3>
                            <p data-aos="fade-up-left" data-aos-duration="2000" className="text-white font-Montserrat text-base font-normal">Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full xl:max-w-[857px] xl:absolute xl:bottom-[4%] xl:left-[-17%] group duration-300">
                        <RoadmapLineIcon5 />
                        <div data-aos="fade-down" data-aos-duration="2000" className=" w-12 md:w-[76px] h-12 md:h-[76px] bg-white text-black font-Montserrat text-sm md:text-base sm:text-lg lg:text-xl font-black rounded-[50%] flex justify-center items-center xl:ml-[24px] mr-4 sm:mr-6 md:mr-8 xl:mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)] duration-300">100% </div>
                        <div className="flex flex-col gap-[5px] sm:gap-2 xl:max-w-[593px]">
                            <h3 data-aos="fade-left" data-aos-duration="2000" className="text-white font-azo text-base sm:text-lg lg:text-xl font-normal">Phase 5</h3>
                            <p data-aos="fade-up-left" data-aos-duration="2000" className="text-white font-Montserrat text-base font-normal">Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-up" data-aos-duration="2000" className="mx-auto max-w-[319px] mt-8 sm:mt-10 lg:mt-14 mb-10 sm:mb-[60px] lg:mb-[121px]">
                <CommonButton text="Read Our Whitepaper"/>
            </div>
        </div>
    )
}

export default Roadmap
