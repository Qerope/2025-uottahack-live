import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string; // Target date in string format (e.g., "2024-03-01T21:30:00")
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZeros = (value: number): string => {
        if (value < 10) {
            return `0${value}`;
        }
        return value.toString();
    };

    return (
        <div>
            <div style={{ textAlign: 'center', fontSize: '6vw' }}>
                <span>{addLeadingZeros(timeLeft.days)}<span style={{ fontSize: '3vw' }}>D</span>:</span>
                <span>{addLeadingZeros(timeLeft.hours)}<span style={{ fontSize: '3vw' }}>H</span>:</span>
                <span>{addLeadingZeros(timeLeft.minutes)}<span style={{ fontSize: '3vw' }}>M</span>:</span>
                <span>{addLeadingZeros(timeLeft.seconds)}<span style={{ fontSize: '3vw' }}>S</span></span>
                <p style={{ fontSize: '18px', fontWeight: 'normal', marginBottom: '50px' }}>TILL HACKING STARTS!</p>
            </div>
        </div>
    );
};

export default Countdown;