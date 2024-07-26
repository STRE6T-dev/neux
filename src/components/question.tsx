import { Black_Han_Sans } from "next/font/google";

import Image from "next/image"
import Star from "public/icons8-star-25.png"

import { Work_Sans } from '@next/font/google';

const workSans = Work_Sans({
  weight: '700', // Bold
  subsets: ['latin'], // You can add other subsets if needed
});

export default function Question(){
   
    return(
        <div className="flex justify-center items-center border-gray-300 pt-5">
            
            
            <div className={workSans.className}>
                <p className="text-center text-wrap bg-gradient-to-br transition-all from-black from-[30%] to-black/40 bg-clip-text text-base py-1 font-medium leading-none">
                You are configuring a new client workstation on the network. Which type of IP address should you
                configure it with?                
                </p>
            </div>
            
        </div>
    );
}