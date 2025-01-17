import React from 'react';
import './DaySelector.css';

interface DaySelectorProps<T extends { index: number; title: string; longTitle?: string }> {
    days: { [key: number]: T };
    selectedDay: T;
    setDay: (day: T) => void;
    mobile: boolean;
}

const DaySelector = <T extends { index: number; title: string; longTitle?: string }>({
    days,
    selectedDay,
    setDay,
    mobile,
}: DaySelectorProps<T>) => {
    return (
        <div className="day-selector">
            {Object.values(days).map((day) => (
                <button
                    key={day.index}
                    className={`day-button ${selectedDay.index === day.index ? 'active' : ''}`}
                    onClick={() => setDay(day)}
                >
                    {mobile ? day.title : day.longTitle || day.title}
                </button>
            ))}
        </div>
    );
};

export default DaySelector;