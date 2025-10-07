import React from "react";
import kmjlogo from "../assets/Images/kmjemslogo.png"
import menuicon from '../assets/Images/hamburgermenu.svg'

export default function Navbar(){
    return(
        <header className="py-7 px-11 flex items-center justify-between">
            <h1>
                <a href="/">
                    <img src={kmjlogo} alt="KMJEMS LOGO" width={70} className="filter brightness-0 invert"/>
                </a>
            </h1>
            <nav className="pt-1">
                <ul className="font-montserrat-medium list-none flex items-center justify-between gap-5 text-white">
                    <li className="text-lg">Home</li>
                    <li className="text-lg">About</li>
                    <li className="text-lg">Admission</li>
                    <li><img src={menuicon} alt="MenuBar" width={20} className="filter brigtness-0 invert"/></li>
                </ul>
            </nav>
        </header>
    )
}