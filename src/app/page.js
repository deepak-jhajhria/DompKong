import About from "@/components/About";
import FaqSec from "@/components/FaqSec";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kong from "@/components/Kong";
import MintNft from "@/components/MintNft";
import PartnerSec from "@/components/PartnerSec";
import Roadmap from "@/components/Roadmap";
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
      <Roadmap />
      <PartnerSec />
      <Team />
      <FaqSec />
      <Footer />
    </div>
  )
}
