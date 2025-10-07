import React from "react";
import About from "./About";
import Navbar from "../Components/Navbar";
import kmjimage from '../assets/Images/kmjimage.jpg'

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
                <h1 className="w-[80%] text-6xl/15 mx-auto scale-y-107 mb-9">"Service Beyond Self Empowering Communities"</h1>
                <a href="/" className="border-2 border-white text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">Learn More</a>
            </div>
        </section>
        <About />
        </>
    )
}