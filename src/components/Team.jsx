import Image from "next/image";
import Image1 from "../assets/image/jaylon1stMember.webp";
import Image2 from "../assets/image/jaylon2ndMember.webp";
import Image3 from "../assets/image/jaylon3rdMember.webp";
import { TeamInstaIcon, TeamTwitterIcon } from "./Icons";

const Team = () => {
    return (
        <div className="max-w-[1140px] mx-auto px-3 ">
            <h2 className="text-[33px] md:text-[64px] font-normal leading-[108%] text-white font-azo text-center pt-5 md:pt-[110px]">Meet The Team</h2>
            <div className="max-w-[1140px] h-1 bg-[#FDDA60] mt-12 border-none shadow-[0_0_15px_0_#FDDA60]"></div>
            <div className="flex flex-wrap">
                <div className=" w-full md:w-1/2 pt-6 flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold leading-[108%] font-Montserrat text-white ">Jaylon Schleifer</h2>
                    <p className="text-xl font-normal leading-[108%] font-Montserrat text-white pt-3"> Carter Septimus</p>
                    <div className=" rounded-[20px] border-[3px] border-[#FDDA60] w-[230px] h-[230px] mt-8 shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
                        <Image className=" rounded-[20px] hover:scale-[1.1] duration-300" src={Image1} alt="Member!st" />
                    </div>
                </div>
                <div className=" w-full md:w-1/2 pt-6 flex flex-col items-center md:items-start">
                    <p className="text-2xl font-semibold text-white font-Montserrat leading-[108%]">@Jaylon Schleifer</p>
                    <p className="text-xl font-normal leading-[108%] font-Montserrat text-white pt-3 items-start md:items-center">Nearly two decades in Business</p>
                    <p className="text-bace font-normal font-Montserrat text-white leading-[160%] pt-8 items-start md:items-center">Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique.</p>
                    <p className="text-bace font-normal font-Montserrat text-white leading-[160%] pt-2 items-start md:items-center">Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. </p>
                    <div className="flex gap-4 pt-5">
                        <a href="https://www.instagram.com" target="_blank" className="hover:animate-bounce duration-300 ">
                            <TeamInstaIcon />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:animate-bounce duration-300">
                            <TeamTwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] h-1 bg-[#FDDA60] mt-12 border-none shadow-[0_0_15px_0_#FDDA60]"></div>
            <div className="flex flex-wrap ">
                <div className=" w-full md:w-1/2 pt-6 flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold leading-[108%] font-Montserrat text-white">Talan Passaquindici Arcand</h2>
                    <p className="text-xl font-normal leading-[108%] font-Montserrat text-white pt-3">Jakob Ekstrom Bothman</p>
                    <div className=" rounded-[20px] border-[3px] border-[#FDDA60] w-[230px] h-[230px] mt-8 shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
                        <Image className="rounded-[20px] hover:scale-[1.1] duration-300" src={Image2} alt="Member2nd" />
                    </div>
                </div>
                <div className=" w-full md:w-1/2 pt-6 flex flex-col items-center md:items-start">
                    <p className="text-2xl font-semibold text-white font-Montserrat leading-[108%]">@Talan Passaquindici Arcand</p>
                    <p className="text-xl font-normal leading-[108%] font-Montserrat text-white pt-3">Invester & International Top Model</p>
                    <p className="text-bace font-normal font-Montserrat text-white leading-[160%] pt-8">Neque hendrerit lectus neque molestie facilisis. Faucibus arcu eget facilisis nisl id ultricies. Aliquet eget scelerisque posuere habitant mauris quis ridiculus rutrum consectetur.</p>
                    <p className="text-bace font-normal font-Montserrat text-white leading-[160%] pt-2">Pretium vitae nunc proin nullam turpis eu blandit. Nibh ultricies gravida vestibulum nec ultricies. Eleifend egestas non nunc, nisl tristique adipiscing non diam fermentum.</p>
                    <div className="flex gap-4 pt-5">
                        <a href="https://www.instagram.com" target="_blank" className="hover:animate-bounce duration-300">
                            <TeamInstaIcon />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:animate-bounce duration-300" >
                            <TeamTwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] h-1 bg-[#FDDA60] mt-12 border-none shadow-[0_0_15px_0_#FDDA60]"></div>
            <div className="flex flex-wrap">
                <div className=" w-full md:w-1/2 pt-6 flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold leading-[108%] font-Montserrat text-white ">Alfonso Franci</h2>
                    <p className="text-xl font-normal leading-[108%] font-Montserrat text-white pt-3">Alfonso Dokidis</p>
                    <div className=" rounded-[20px] border-[3px] border-[#FDDA60] w-[230px] h-[230px] mt-8 shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
                        <Image className=" rounded-[20px] hover:scale-[1.1] duration-300" src={Image3} alt="Member2nd" />
                    </div>
                </div>
                <div className=" w-full md:w-1/2 pt-6 flex flex-col items-center md:items-start">
                    <p className="text-2xl font-semibold text-white font-Montserrat leading-[108%]">@Alfonso Franci</p>
                    <p className="text-xl font-normal leading-[108%] font-Montserrat text-white pt-3">Nearly two decades in Business</p>
                    <p className="text-bace font-normal font-Montserrat text-white leading-[160%] pt-8">A ut sagittis, purus sit integer suspendisse lacus quam auctor. Interdum venenatis, sed ligula purus erat. A hac faucibus blandit euismod molestie amet nibh scelerisque.</p>
                    <p className="text-bace font-normal font-Montserrat text-white leading-[160%] pt-2"> Fermentum aliquam fames suscipit scelerisque integer mauris sollicitudin. Tellus mattis egestas molestie elementum, elementum. Urna, in molestie ac quam nisl orci mattis.</p>
                    <div className="flex gap-4 pt-5">
                        <a href="https://www.instagram.com/" target="_blank" className="hover:animate-bounce duration-300">
                            <TeamInstaIcon />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:animate-bounce duration-300">
                            <TeamTwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;