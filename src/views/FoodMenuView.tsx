import React from 'react';
import './FoodMenuView.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { getRelativeDayTime } from '../utils';
import { uOttaHack } from '../data/schedule';
import { RelativeTime, EventListener } from '../enums';
import { MOBILE_BREAKPOINT_WIDTH } from '../constants';

const FoodCard = ({ meal = "", title = "", items = [["", ""]], n = 1, html = (<></>), imageSrc = "" }) => (
	<div className={'col-md-' + (12 / n) + ' col-sm-6 col-xs-12 mt-2'}>
	  <div className="food-card p-3 mb-2 rounded">
		<div className="mt-3">
		  <div className="d-flex justify-content-between">
			<h3 className="heading font-weight-bold">{meal}</h3>
			{title !== "" && <div className="badge"><span>{title}</span></div>}
		  </div>
		  <div className="mt-1 d-flex justify-content-between">
			<div className="description">
			  <div className="mt-2">
				{html !== (<></>) && html}
				{items[0][0] !== "" &&
				  items.map((itemi, index) => (
					<div className="mt-3" key={index}>
					  <span className="text1">{itemi[0]}: <span className='text2'>{itemi[1]}</span></span>
					</div>
				  ))}
			  </div>
			</div>
			{/* Image inside FoodCard */}
			{imageSrc && (
			  <div className="food-image">
				<img src={imageSrc} alt={meal} />
			  </div>
			)}
		  </div>
		</div>
	  </div>
	</div>
);

const day1 = (
	<div>
		<div className="workshop-day">
			<h5>Dinner<span className="time">18:00</span></h5>
			<div className="workshops">
				<FoodCard
					meal="Shawarma Express 🌯"
					title="Shawarma Express🥙"
					items={[
						['Included Items', 'Falafel, chicken and beef with rice, garlic potatoes, hummus, garlic sauce, pickles, fattoush salad, tabbouli salad, and pita bread'],
						['Falafel', 'Chickpeas, parsley, garlic, cumin, smoked paprika, wheat'],
						['Tabbouli Salad', 'Parsley, tomato, bulgur wheat, olive oil, lemon juice'],
						['Garlic Sauce', 'Garlic, oil, lemon, egg'],
						['Baklawa', 'Nuts, syrup, phyllo dough']
					  ]}					  
					imageSrc={require('../assets/images/shawarmaexpress.png')}
				/>
			</div>
		</div>
	</div>
);

const day2 = (
  <div>
    <div className="workshop-day">
      <h5>Breakfast<span className="time">8:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="Breakfast 🥐"
          items={[
			['Baked Goods', 'muffins (banana chocolate chip/chocolate chip/double chocolate), croissants'],
            ['Fruits','Apples, clementines, bananas'],
            ['Beverages','Coffee, tea, water, redbull ;)']
          ]}
          imageSrc={require('../assets/images/muffins.png')}
        />
      </div>
    </div>

    <div className="workshop-day raon-img">
      <h5>Lunch<span className="time">12:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="Raon Kitchen 🍱"
          title="Raon Kitchen 🍚"
          items={[
			[
			  'Bibimbap',
			  'Raon Kitchen\'s signature Korean dish. A rice bowl with assorted vegetables, kimchi, and your choice of protein. Includes black & white rice, carrots, cabbage, spinach, mushrooms, and egg garnish (optional for vegans). Served with house-made sauces: chogochujang, lemon soy, sesame oil, and seeds.'
			],
			[
			  'Tofu (Vegan, Gluten-Free)',
			  'Mild, soy sauce-based protein option.'
			],
			[
			  'Chicken (Halal, Gluten-Free)',
			  'Spicy, gochujang-based protein option.'
			],
			[
			  'Beef (Not Gluten-Free)',
			  'Mild, soy sauce-based protein option.'
			]
		  ]}
		  
          imageSrc={require('../assets/raon.png')}
        />
      </div>
    </div>

    <div className="workshop-day">
      <h5>Dinner<span className="time">18:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="BiBi's 🫔"
          title="BiBi's 🌯"
          items={[
            ['Beef/Chicken/Falafel Wrap', 'white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil, red vinegar, pomegranate molasses, sesame sauce, chopped onion'],
            ['Hummus Bowl', 'chickpeas, sesame sauce, olive oil, lemon juice, white pepper'],
            ['Tabbouleh/Fattoush Salad', 'parsley, tomato, bulgur wheat, olive oil, lemon juice'],
            ['Addons','Garlic Potatoes, Rice, Pita']
          ]}
          imageSrc={require('../assets/images/bibis.png')}
        />
      </div>
    </div>
  </div>
);

const day3 = (
  <div>
    <div className="workshop-day">
      <h5>Breakfast<span className="time">8:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="Breakfast 🥐"
          items={[
            ['Baked Goods', 'muffins (banana chocolate chip/chocolate chip/double chocolate), croissants'],
            ['Fruits','Apples, clementines, bananas'],
            ['Beverages','Coffee, tea, water, redbull ;)']
          ]}
          imageSrc={require('../assets/images/muffins.png')}
        />
      </div>
    </div>

    <div className="workshop-day">
      <h5>Lunch<span className="time">12:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="BanhMiYes 🥖"
		  title="BanhMiYes 🥪"
          items = {[
			['Grilled Beef (Halal)', 'Halal ground beef with homemade sauce, Vietnamese kimchi, coriander, and hot sauce. Dairy-Free, Nut-Free, Halal, Contains Gluten, Contains Egg.'],
  			['Pulled Chicken', 'Tender chicken with mayo, pickled carrot, cucumber, and coriander. Dairy-Free, Nut-Free, Contains Gluten, Contains Egg.'],
  			['Tofu & Veggie Pork', 'Crispy tofu with veggie pork, pickles, cucumber, and green onion. Dairy-Free, Nut-Free, Vegetarian, Contains Gluten, Contains Egg.']
			]}
          imageSrc={require('../assets/banhmiyes.webp')}
        />
      </div>
    </div>
  </div>
);

const days = [day1, day2, day3];
const dayLabels = ['Fri', 'Sat', 'Sun'];
const dayLabelsLong = ['Friday January 17', 'Saturday January 18', 'Sunday January 19'];

const FoodMenuView: React.FC = () => {
	let initialDay = 0;
	if (getRelativeDayTime(uOttaHack.secondEventDay.date) === RelativeTime.Present) {
		initialDay = 1;
	} else if (getRelativeDayTime(uOttaHack.thirdEventDay.date) === RelativeTime.Present) {
		initialDay = 2;
	}

	const [button, setButton] = React.useState(initialDay);
	const [mobile, setMobile] = React.useState(true);

	const updateDimensions = () => {
		const isMobile = window.innerWidth < MOBILE_BREAKPOINT_WIDTH;
		if (mobile !== isMobile) {
			setMobile(isMobile);
		}
	};

	React.useEffect(() => {
		updateDimensions();
		window.addEventListener(EventListener.Resize, updateDimensions);

		return () => {
			window.removeEventListener(EventListener.Resize, updateDimensions);
		};
	});

	const handleClick = (index: number) => setButton(index);

	return (
		<Container id="food-menu-view" fluid>
			<Col>
				{/* Add heading here */}
				{/* <h1 className="hacker-countdown-title font-weight-bold mt-4 mb-4">
				Exciting updates are coming your way—stay tuned for more delicious details, arriving soon! 🍽️🚀
				</h1>

				// commenting out for now, uncomment when were ready to show this info */}
				<div className="d-flex flex-column">
				<ButtonGroup className="button-group rounded" style={{ width: '90%', margin: '0 auto'}}>
					{(mobile ? dayLabels : dayLabelsLong).map((label, index) => (
					<Button
						className='ml-2 mr-2 mb-2 mt-5'
						key={`button-${index}`}
						onClick={() => handleClick(index)}
						style={{
						backgroundColor: index === button ? '#476ab8' : '#f8f9fa',
						border: "0",
						fontWeight: index === button ? 700 : 400,
						borderRadius: "1rem",
						padding: "0.8rem 0 0.8rem 0",
						outline: 'none',
						boxShadow: 'none'
						}}
						variant={index === button ? 'dark' : 'light'}
					>
						{label}
					</Button>
					))}
				</ButtonGroup>
				</div>

				<div className="workshops">
				{days[button]}
				</div> 
			</Col>
			</Container>
	);
};

export default FoodMenuView;