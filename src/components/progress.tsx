import Image from "next/image";

import Timer from "public/icons8-timer-30.png";
import Pause from "public/icons8-pause-30.png";
import ProgressBar from "./progressBar";
import { Black_Han_Sans } from "next/font/google";

import Countdown from "./CountDown";

const  duration = "01:00:00";
export default function Progress(){
    return(
            <div className="flex justify-around items-center my-2 p-4 overflow-auto">
                <h3>1 / 90</h3>
            
                <div className="flex-grow min-w-[400px] mx-2">
                    <ProgressBar />
                </div>
            
                <div className="flex items-center mx-2">
                    <Image 
                        src={Timer}
                        alt="timer"
                    />
                </div>
            
                <Countdown duration={duration}></Countdown>
            
                <div className="flex items-center mx-2">
                    <Image 
                        src={Pause}
                        alt="Pause Button"
                    />
                </div>
            
                <h3>Finish Test</h3>
        </div>
    

            
                    

    );
}