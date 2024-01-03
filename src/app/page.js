import About from "@/components/About";
import Header from "@/components/Header";
import Kong from "@/components/Kong";
import MintNft from "@/components/MintNft";
import Team from "@/components/Team";
import Utilities from "@/components/Utilities";
export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <Header />
      <About />
      <Utilities />
      <Kong />
      <MintNft />
      <Team />
    </div>
  )
}
