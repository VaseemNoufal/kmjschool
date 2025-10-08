import React from "react";
import About from "./About";
import Navbar from "../Components/Navbar";
import CurvedLoop from "../Components/CurvedLoop";
//Importing Images
import kmjimage from '../assets/Images/kmjimage.jpg'
import facebookicon from '../assets/Images/facebook.svg'
import instagramicon from "../assets/Images/instagram.svg"

export default function Home(){
    return(
        <>
        <section className="h-screen w-full relative">
            <Navbar />
            <div className="fixed inset-0 -z-10">
                <img
                src={kmjimage}
                alt="Background"
                className="w-full h-full object-cover object-[center_20%]"
                />

                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="w-[55%] mx-auto pt-12 text-center text-white font-montserrat-bold">
                <h3 className="mb-4">"NOT ME BUT YOU"</h3>
                <h1 className="w-[99%] text-6xl/15 mx-auto scale-y-107 mb-9">"Service Beyond Self Empowering Communities"</h1>
                <a href="/" className="border-2 border-white text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">Learn More</a>
            </div>
            <div className="absolute left-9 bottom-11 flex flex-col items-center justify-center">
                <div className="block w-[1px] h-[50px] bg-white mb-3"></div>
                <a href="">
                    <img src={facebookicon} alt="Facebook-icon" width={20} className="filter brigtness-0 invert mb-3"/>
                </a>
                <a href="">
                    <img src={instagramicon} alt="Facebook-icon" width={20} className="filter brigtness-0 invert"/>
                </a>
            </div>
            <div className="absolute right-9 bottom-7 animate-[bounceBottom_2s_ease-in-out_infinite]">
                <h1 className="text-white font-montserrat-bold tracking-[0.25em] text-xs rotate-90 origin-right">SCROLL DOWN →</h1>
            </div>
        </section>
        <About />
        <section className="h-[37vh] w-full overflow-hidden bg-white">
            <CurvedLoop 
                marqueeText="Admission Open ✦ For 2026-27 ✦"
                speed={3}
                curveAmount={300}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />

        </section>
        </>
    )
}