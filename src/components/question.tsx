import { Black_Han_Sans } from "next/font/google";

import Image from "next/image"
import Star from "public/icons8-star-25.png"

const black_hans = Black_Han_Sans({
    style: "normal",
    weight: '400',
    subsets: ['latin']
});
export default function Question(){
   
    return(
        <div className="flex justify-center items-center border-gray-300 ">
            <Image 
                src={Star}
                alt="photo of a star"
            />
            
            <div className={black_hans.className}>
                <p className="text-center text-sm text-wrap">
                You are configuring a new client workstation on the network. Which type of IP address should you
                configure it with?                
                </p>
            </div>
            
        </div>
    );
}