import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    daysThreshold?: number;
    hoursThreshold?: number;
    minutesThreshold?: number;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({
    targetDate,
    showDays = true,
    showHours = true,
    showMinutes = true,
    showSeconds = true,
    daysThreshold = 1,
    hoursThreshold = 24,
    minutesThreshold = 60,
}) => {
    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [gradientAngle, setGradientAngle] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    useEffect(() => {
        let lastTime = performance.now();
        const animateGradient = (time: number) => {
            const delta = time - lastTime;
            if (delta > 64) { // Cap the FPS to ~24
                setGradientAngle((prev) => (prev + 1) % 360);
                lastTime = time;
            }
            requestAnimationFrame(animateGradient);
        };
        requestAnimationFrame(animateGradient);
    }, []);

    const formatTimeUnit = (value: number): string => (value < 10 ? `0${value}` : value.toString());

    const shouldShowDays = showDays && (timeLeft.days >= daysThreshold || timeLeft.days > 0);
    const shouldShowHours =
        showHours && (timeLeft.days > 0 || timeLeft.hours >= hoursThreshold || timeLeft.hours > 0);
    const shouldShowMinutes =
        showMinutes &&
        (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes >= minutesThreshold || timeLeft.minutes > 0);
    const shouldShowSeconds =
        showSeconds &&
        (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0);

    const containerStyle = {
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 6s infinite',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        alignItems: 'center',
        fontSize: '2.5rem',
        fontFamily: '"Roboto", sans-serif',
    };

    const timeUnitStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 8px',
        padding: '15px',
        borderRadius: '10px',
        transition: 'transform 0.5s ease, opacity 0.5s ease',
    };

    const numberStyle = {
        fontSize: '5rem',
        fontWeight: 'bold',
        backgroundImage: `linear-gradient(${gradientAngle}deg, #476AB8, #85AED0, #88C5FF)`,
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 8px 15px rgba(0, 12, 124, 0.12)',
        marginBottom: '-10px',
        opacity: 1,
        transition: 'opacity 0.5s ease',
    };

    const labelStyle = {
        fontSize: '2rem',
        fontWeight: '300',
        color: '#666',
        letterSpacing: '1px',
        backgroundImage: `linear-gradient(${gradientAngle}deg, #476AB8, #85AED0, #88C5FF)`,
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textTransform: 'uppercase',
    };

    return (
        <div style={containerStyle}>
            {shouldShowDays && (
                <div style={timeUnitStyle}>
                    <span style={{ ...numberStyle, opacity: timeLeft.days >= 0 ? 1 : 0 }}>
                        {formatTimeUnit(timeLeft.days)}
                    </span>
                    <span style={labelStyle}>D</span>
                </div>
            )}
            {shouldShowHours && (
                <div style={timeUnitStyle}>
                    <span style={{ ...numberStyle, opacity: timeLeft.hours >= 0 ? 1 : 0 }}>
                        {formatTimeUnit(timeLeft.hours)}
                    </span>
                    <span style={labelStyle}>H</span>
                </div>
            )}
            {shouldShowMinutes && (
                <div style={timeUnitStyle}>
                    <span style={{ ...numberStyle, opacity: timeLeft.minutes >= 0 ? 1 : 0 }}>
                        {formatTimeUnit(timeLeft.minutes)}
                    </span>
                    <span style={labelStyle}>M</span>
                </div>
            )}
            {shouldShowSeconds && (
                <div style={timeUnitStyle}>
                    <span style={{ ...numberStyle, opacity: timeLeft.seconds >= 0 ? 1 : 0 }}>
                        {formatTimeUnit(timeLeft.seconds)}
                    </span>
                    <span style={labelStyle}>S</span>
                </div>
            )}
        </div>
    );
};

export default Countdown;
