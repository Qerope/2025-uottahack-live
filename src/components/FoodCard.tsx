import React from 'react';
import './FoodCard.css';

interface FoodCardProps {
    mealType: 'breakfast' | 'lunch' | 'dinner';
    restaurant: string;
    time: string;
    items: [string, string][];
    imageSrc?: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ mealType, restaurant, time, items, imageSrc }) => {
    return (
        <div className={`food-card ${mealType}`}>
            {/* meal Type header & time aligned */}
            <div className={`food-card-header ${mealType}`}>
                <span>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</span>
                <span className="food-card-time">{time}</span>
            </div>

            {/* restaurant name */}
            <h3 className={`food-card-title ${mealType}`}>{restaurant}</h3>

            {/* description & image */}
            <div className="food-card-content">
                <div className="food-card-description">
                    {items.map(([category, description], index) => (
                        <div className="food-card-item" key={index}>
                             <span className="item-category">{category}:</span> <span className="item-description">{description}</span>
                        </div>
                    ))}
                </div>

                {/* image with fixed size & scaling */}
                <div className="food-card-image">
                    {imageSrc ? (
                        <img src={imageSrc} alt={restaurant} />
                    ) : (
                        <div className="skeleton-loader"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;