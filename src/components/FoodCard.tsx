import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './FoodCard.css';

type ImageSource = string | { default: string };

interface FoodCardProps {
    mealType: 'breakfast' | 'lunch' | 'dinner';
    restaurant: string;
    time: string;
    items: [string, string][];
    imageSrc: ImageSource;
}

const FoodCard: React.FC<FoodCardProps> = ({ mealType, restaurant, time, items, imageSrc }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const src = typeof imageSrc === 'string' ? imageSrc : imageSrc.default;

    useEffect(() => {
        if (imageSrc) {
            const img = new Image();
            img.src = src;
            img.onload = () => setIsImageLoading(false);
        } else {
            setIsImageLoading(false);
        }
    }, [imageSrc]);

    return (
        <div className={`food-card ${mealType}`}>
            {/* Meal Type Header & Time Aligned */}
            <div className={`food-card-header ${mealType}`}>
                <span>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</span>
                <span className="food-card-time">{time}</span>
            </div>

            {/* Restaurant Name */}
            <h3 className={`food-card-title ${mealType}`}>{restaurant}</h3>

            {/* Description & Image */}
            <div className="food-card-content">
                <div className="food-card-description">
                    {items.map(([category, description], index) => (
                        <div className="food-card-item" key={index}>
                            <span className="item-category">{category}:</span>{' '}
                            <span className="item-description">{description}</span>
                        </div>
                    ))}
                </div>

                {/* Image with Skeleton Loader */}
                <div className="food-card-image">
                    {isImageLoading ? (
                        <Skeleton height={180} width={280} />
                    ) : (
                        imageSrc && <img src={src} alt={restaurant} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;