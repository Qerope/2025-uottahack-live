import React, { useState, useEffect } from 'react';
import './Countdown.css';

interface CountdownProps {
    targetDate: string;
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
        return value < 10 ? `0${value}` : value.toString();
    };

    return (
        <div className="countdown-container">
            <div className="countdown-timer">
                <span className="time-segment">
                    <span className="number">{addLeadingZeros(timeLeft.days)}</span>
                    <span className="unit">D</span>
                </span>
                <span className="separator">:</span>
                <span className="time-segment">
                    <span className="number">{addLeadingZeros(timeLeft.hours)}</span>
                    <span className="unit">H</span>
                </span>
                <span className="separator">:</span>
                <span className="time-segment">
                    <span className="number">{addLeadingZeros(timeLeft.minutes)}</span>
                    <span className="unit">M</span>
                </span>
                <span className="separator">:</span>
                <span className="time-segment">
                    <span className="number">{addLeadingZeros(timeLeft.seconds)}</span>
                    <span className="unit">S</span>
                </span>
            </div>
        </div>
    );
};

export default Countdown;