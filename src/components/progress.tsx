
'use client';

import Image from "next/image";
import React, { useState } from 'react';
import Timer from "public/icons8-timer-30.png";
import Pause from "public/icons8-pause-30.png";
import Play from "public/icons8-play-30.png";
import ProgressBar from "./progressBar";
import Countdown from "./CountDown";
import { Button } from "@nextui-org/button";

const duration = "01:00:00";

const Progress = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [imageSrc, setImageSrc] = useState(Play);

    const handleClick = () => {
        setImageSrc(prevSrc => 
          prevSrc === Pause ? Play : Pause
        );
      };
    
    const togglePause = () => {
      setIsPaused((prevState) => !prevState);
    };
  
    const handleStop = () => {
      // Implement your finish test logic here
    };
  
    return (
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
  
        <Countdown duration={duration} isPaused={isPaused}></Countdown>
  
        <div className="flex items-center mx-2" onClick={togglePause} style={{ cursor: 'pointer' }}>
          <Image 
            src={imageSrc} 
            alt="Pause Button / Play"
            width={30} 
            height={30}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
  
        <Button onClick={handleStop}>Finish Test</Button>
      </div>
    );
  };
  
  export default Progress;