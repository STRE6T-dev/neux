'use client'
// components/CountdownTimer.js
// components/CountdownTimer.js
import React, { useEffect, useState } from 'react';
import { Card, Text, Button, Container } from '@nextui-org/react';

const Countdown = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isActive, setIsActive] = useState(true); // Start active by default

  useEffect(() => {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTimeLeft({ hours, minutes, seconds, totalSeconds });

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const remaining = prev.totalSeconds - 1;

        if (remaining < 0) {
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
        }

        const newHours = Math.floor(remaining / 3600);
        const newMinutes = Math.floor((remaining % 3600) / 60);
        const newSeconds = remaining % 60;

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
          totalSeconds: remaining,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  return (
    <div>

        <h3>{`${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}</h3>
      
    </div>
  );
};

export default Countdown;
