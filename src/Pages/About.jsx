import React from "react";

export default function About(){
    return(
        <div className="h-[90vh] w-full flex justify-center items-center bg-white -z-11">
            <div className="w-[70%] h-[100%] py-20">
                <div className="text-center flex flex-col items-center justify-center mb-6">
                    <div className="block w-[2px] h-[60px] bg-gray-500 mb-2"></div>
                    <h1 className="font-montserrat-bold scale-x-95 text-lg text-[#07617D]">About Us</h1>
                </div>
                <div>
                    <h1 className="font-montserrat-bold text-center text-4xl/13 scale-x-92 text-[#303030]"><span className="text-[#07617D]">"Education is the most powerful weapon which you can use to change the world."</span> - Nelson Mandela
                    At KMJ English Medium School, we believe that every student has the power to make a difference.</h1>
                </div>
            </div>
        </div>
    )
}