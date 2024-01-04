import Image from "next/image";
import Image1 from "../assets/image/jaylon1stMember.webp";
import Image2 from "../assets/image/jaylon2ndMember.webp";
import Image3 from "../assets/image/jaylon3rdMember.webp";
import { TeamInstaIcon, TeamTwitterIcon } from "./Icons";

const Team = () => {
    const items = [
        { Name: "Jaylon Schleifer", UserName: "@Jaylon Schleifer", work: "Carter Septimus", Image1: Image1, title: "Nearly two decades in Business", para1: "Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. ", para2: "Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. ", InstaPage: (<TeamInstaIcon />), TwiterPage: (<TeamTwitterIcon />) },
        { Name: "Talan Passaquindici Arcand", UserName: "@Talan Passaquindici Arcand", work: "Jakob Ekstrom Bothman", Image1: Image2, title: "Nearly two decades in Business", para1: "Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. ", para2: "Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. ", InstaPage: (<TeamInstaIcon />), TwiterPage: (<TeamTwitterIcon />) },
        { Name: "Alfonso Franci", UserName: "@Alfonso Franci", work: "Alfonso Dokidis", Image1: Image3, title: "Nearly two decades in Business", para1: "Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. ", para2: "Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. ", InstaPage: (<TeamInstaIcon />), TwiterPage: (<TeamTwitterIcon />) },
    ]

    const ItemsData = items.map((listing) => (
        <div key={listing.Name} className="grid grid-cols-1 md:grid-cols-2 border-t border-[#FDDA60] relative after:absolute after:w-full after:h-[2px] after:left-0 after:top-0 after:bg-[#FDDA60] after:blur-sm mt-8 sm:mt-10 md:mt-14 lg:mt-[62px]">
            <div className="flex flex-col mt-4 lg:mt-6">
                <p className=" text-white font-Montserrat font-bold text-xl sm:text-2xl">{listing.Name}</p>
                <p className=" text-white text-lg sm:text-xl font-Montserrat font-normal mt-2 lg:mt-[11px]">{listing.work}</p>
                <Image className="mt-3 sm:mt-5 lg:mt-[30px] border-[3px] border-[#FDDA60] rounded-[20px] shadow-[0_0_17px_4px_rgba(253,218,96,0.50)]" src={listing.Image1} alt="Team Member"/>
            </div>
            <div className="flex flex-col mt-4 lg:mt-6">
                <p className="text-white font-Montserrat font-bold text-2xl">{listing.UserName}</p>
                <p className="text-white text-lg sm:text-xl font-Montserrat font-normal mt-1 sm:mt-2 lg:mt-3">{listing.title}</p>
                <p className="text-white text-sm sm:text-base font-Montserrat font-normal mt-3 sm:mt-5 lg:mt-8">{listing.para1}</p>
                <p className="text-white text-sm sm:text-base font-Montserrat font-normal mt-2 lg:mt-[10px]">{listing.para2}</p>
                <div className="flex gap-3 lg:gap-4 items-center mt-3 lg:mt-5">
                    <span>{listing.InstaPage}</span>
                    <span>{listing.TwiterPage}</span>
                </div>
            </div>
        </div>
    ))
    return (
        <div className="container max-w-[1140px] mt-[90px]">
            <h2 className="text-white font-azo font-normal text-center leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase -mb-3">Meet The Team</h2>
            {ItemsData}
        </div>
    );
};

export default Team;