"use client";
import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
import Kong from "@/components/Kong";
import MintNft from "@/components/MintNft";
import PartnerSec from "@/components/PartnerSec";
import Preloader from "@/components/Preloader";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Utilities from "@/components/Utilities";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaqFooter from "@/components/Faq&Footer";
export default function Home() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 2000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  return (
    <div>
      {
        screenLoading ? (<Preloader />) : (<div>
          <div className="bg-[#0A0A0A]">
            <Header />
            <About />
            <Utilities />
            <Kong />
            <MintNft />
            <Roadmap />
            <PartnerSec />
            <Team />
            <FaqFooter />
            <BackToTop />
          </div></div>)
      }
    </div>
  )
}
