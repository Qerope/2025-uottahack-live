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
    // Function to calculate time left
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

    // State to hold the time left
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    // Update the countdown every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Function to format time units with leading zeros
    const formatTimeUnit = (value: number): string => (value < 10 ? `0${value}` : value.toString());

    // Helper to check if we should display a certain time unit
    const shouldShowDays = showDays && (timeLeft.days >= daysThreshold || timeLeft.days > 0);
    const shouldShowHours =
        showHours && (timeLeft.days > 0 || timeLeft.hours >= hoursThreshold || timeLeft.hours > 0);
    const shouldShowMinutes =
        showMinutes &&
        (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes >= minutesThreshold || timeLeft.minutes > 0);
    const shouldShowSeconds =
        showSeconds &&
        (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0);

    return (
        <div style={styles.countdownContainer}>
            {shouldShowDays && (
                <div style={styles.timeUnit}>
                    <span style={styles.number}>{formatTimeUnit(timeLeft.days)}</span>
                    <span style={styles.label}>D</span>
                </div>
            )}

            {shouldShowHours && (
                <div style={styles.timeUnit}>
                    <span style={styles.number}>{formatTimeUnit(timeLeft.hours)}</span>
                    <span style={styles.label}>H</span>
                </div>
            )}

            {shouldShowMinutes && (
                <div style={styles.timeUnit}>
                    <span style={styles.number}>{formatTimeUnit(timeLeft.minutes)}</span>
                    <span style={styles.label}>M</span>
                </div>
            )}

            {shouldShowSeconds && (
                <div style={styles.timeUnit}>
                    <span style={styles.number}>{formatTimeUnit(timeLeft.seconds)}</span>
                    <span style={styles.label}>S</span>
                </div>
            )}
        </div>
    );
};

// Styles for the countdown
const styles = {
    countdownContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '10px',
        fontSize: '2.5rem',
    },
    timeUnit: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 4px',
        padding: '10px',
        borderRadius: '5px',
    },
    number: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginRight: '4px',
    },
    label: {
        fontSize: '1.6rem',
        fontWeight: '300',
    },
};

export default Countdown;