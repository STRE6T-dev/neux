'use client'

import React, { useEffect, useState } from 'react';

const Countdown = ({ duration, isPaused, onEnd = () => {} }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isActive, setIsActive] = useState(!isPaused);

  useEffect(() => {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    setTimeLeft({ hours, minutes, seconds, totalSeconds });
  }, [duration]);

  useEffect(() => {
    setIsActive(!isPaused);
  }, [isPaused]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.totalSeconds <= 0) {
          clearInterval(interval);
          onEnd();
          return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
        }

        const remaining = prev.totalSeconds - 1;
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
  }, [isActive, onEnd]);

  return (
    <div>
      <h3>{`${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}</h3>
    </div>
  );
};

export default Countdown;
