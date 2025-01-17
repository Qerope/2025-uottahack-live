import React from 'react';
import FoodCard from '../components/FoodCard';

export interface IFoodMenuDay {
    index: number;
    title: string;
    longTitle: string;
    content: React.ReactNode;
}

export const foodDays: { [key: number]: IFoodMenuDay } = {
    0: {
        index: 0,
        title: "Fri",
        longTitle: "Friday 🎉",
        content: (
            <FoodCard
                mealType="dinner"
                restaurant="Shawarma Express 🌯"
                time="18:00"
                items={[
                    ['Included Items', 'Falafel, chicken and beef with rice, garlic potatoes, hummus, garlic sauce, pickles, fattoush salad, tabbouli salad, and pita bread'],
                    ['Falafel', 'Chickpeas, parsley, garlic, cumin, smoked paprika, wheat'],
                    ['Tabbouli Salad', 'Parsley, tomato, bulgur wheat, olive oil, lemon juice'],
                    ['Garlic Sauce', 'Garlic, oil, lemon, egg'],
                    ['Baklawa', 'Nuts, syrup, phyllo dough']
                ]}
                imageSrc={require('../assets/images/shawarmaexpress.png')}
            />
        ),
    },
    1: {
        index: 1,
        title: "Sat",
        longTitle: "Saturday 🕺",
        content: (
            <>
                <FoodCard
                    mealType="breakfast"
                    restaurant="Breakfast 🥐"
                    time="8:00"
                    items={[
                        ['Baked Goods', 'muffins (banana chocolate chip/chocolate chip/double chocolate), croissants'],
                        ['Fruits', 'Apples, clementines, bananas'],
                        ['Beverages', 'Coffee, tea, water, redbull']
                    ]}
                    imageSrc={require('../assets/images/muffins.png')}
                />

                <FoodCard
                    mealType="lunch"
                    restaurant="Raon Kitchen 🍱"
                    time="12:00"
                    items={[
                        ['Bibimbap', 'Raon Kitchen\'s signature Korean dish. A rice bowl with assorted vegetables, kimchi, and your choice of protein.'],
                        ['Tofu', 'Vegan, Gluten-Free'],
                        ['Chicken', 'Halal, Gluten-Free'],
                        ['Beef', 'Not Gluten-Free']
                    ]}
                    imageSrc={require('../assets/raon.png')}
                />

                <FoodCard
                    mealType="dinner"
                    restaurant="BiBi's 🫔"
                    time="18:00"
                    items={[
                        ['Beef/Chicken/Falafel Wrap', 'white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil, red vinegar, pomegranate molasses, sesame sauce, chopped onion'],
                        ['Hummus Bowl', 'chickpeas, sesame sauce, olive oil, lemon juice, white pepper'],
                        ['Tabbouleh/Fattoush Salad', 'parsley, tomato, bulgur wheat, olive oil, lemon juice'],
                        ['Addons', 'Garlic Potatoes, Rice, Pita']
                    ]}
                    imageSrc={require('../assets/images/bibis.png')}
                />
            </>
        ),
    },
    2: {
        index: 2,
        title: "Sun",
        longTitle: "Sunday 🌅",
        content: (
            <>
                <FoodCard
                    mealType="breakfast"
                    restaurant="Breakfast 🥐"
                    time="8:00"
                    items={[
                        ['Baked Goods', 'muffins (banana chocolate chip/chocolate chip/double chocolate), croissants'],
                        ['Fruits', 'Apples, clementines, bananas'],
                        ['Beverages', 'Coffee, tea, water, redbull']
                    ]}
                    imageSrc={require('../assets/images/muffins.png')}
                />

                <FoodCard
                    mealType="lunch"
                    restaurant="BanhMiYes 🥖"
                    time="12:00"
                    items={[
                        ['Grilled Beef (Halal)', 'Halal ground beef with homemade sauce, Vietnamese kimchi, coriander, and hot sauce.'],
                        ['Pulled Chicken', 'Tender chicken with mayo, pickled carrot, cucumber, and coriander.'],
                        ['Tofu & Veggie Pork', 'Crispy tofu with veggie pork, pickles, cucumber, and green onion.']
                    ]}
                    imageSrc={require('../assets/banhmiyes.webp')}
                />
            </>
        ),
    },
};