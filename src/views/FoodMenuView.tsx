import React from 'react';
import './FoodMenuView.css';
import '../assets/image 60.png'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { getRelativeDayTime } from '../utils';
import { uOttaHack } from '../data/schedule';
import { RelativeTime, EventListener } from '../enums';
import { MOBILE_BREAKPOINT_WIDTH } from '../constants';

const FoodCard = ({ meal = "", title = "", items = [["", ""]], n = 1, html = (<></>), imageSrc }) => (
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
					meal="Dinner 🥖"
					title="Subway 🚇"
					items={[
					  ['Subway Sandwich', 'choice of bread, protein (e.g., turkey, ham, veggie patty), various vegetables, cheese, sauce'],
					  ['Chips', 'potato chips or any preferred side'],
					  ['Salad', 'lettuce, tomatoes, cucumbers, olives, dressing'],
					  ['Add-ons', 'pickles, jalapeños, onions, extra cheese']
					]}
					imageSrc={require('../assets/image 60.png')}
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
            ['Baked Goods', 'Muffins, croissants, braided apple turnovers, mini chocolatines'],
            ['Bagels', 'Kettleman\'s bagels & cream cheese'],
            ['Fruits','Apples, clementines, bananas'],
            ['Beverages','Coffee, tea, water, redbull ;)']
          ]}
          imageSrc={require('../assets/image 60.png')}
        />
      </div>
    </div>

    <div className="workshop-day">
      <h5>Lunch<span className="time">12:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="Lunch 🍱"
          title="Raon Kitchen 🍚"
          items={[
            ['Kimchi', 'napa cabbage, Korean radish, garlic, ginger, Korean red pepper flakes, fish sauce, salted shrimp'],
            ['Gochujang Sauce', 'fermented soybean paste, glutinous rice powder, barley malt powder, red chili powder, soy sauce'],
            ['Marinated Bulgogi Beef', 'beef sirloin, soy sauce, sugar, sesame oil, garlic, ginger, black pepper'],
            ['Bibimbap Rice Bowl', 'steamed rice, assorted vegetables, fried egg, gochujang sauce'],
            ['Add-ons','Kimbap Rolls, Japchae Noodles, Tofu Side Dish']
          ]}
          imageSrc={require('../assets/image 60.png')}
        />
      </div>
    </div>

    <div className="workshop-day">
      <h5>Dinner<span className="time">18:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="Dinner 🫔"
          title="BiBi's 🌯"
          items={[
            ['Beef/Chicken/Falafel Wrap', 'white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil, red vinegar, pomegranate molasses, sesame sauce, chopped onion'],
            ['Hummus Bowl', 'chickpeas, sesame sauce, olive oil, lemon juice, white pepper'],
            ['Tabbouleh/Fattoush Salad', 'parsley, tomato, bulgur wheat, olive oil, lemon juice'],
            ['Addons','Garlic Potatoes, Rice, Pita']
          ]}
          imageSrc={require('../assets/image 60.png')}
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
            ['Baked Goods', 'muffins, croissants, braided apple turnovers, mini chocolatines'],
            ['Bagels', 'Kettleman\'s bagels & cream cheese'],
            ['Fruits','Apples, clementines, bananas'],
            ['Beverages','Coffee, tea, water, redbull ;)']
          ]}
          imageSrc={require('../assets/image 60.png')}
        />
      </div>
    </div>

    <div className="workshop-day">
      <h5>Lunch<span className="time">12:00</span></h5>
      <div className="workshops">
        <FoodCard
          meal="Lunch 🥪"
          items={[
            ['Beef/Chicken/Falafel', 'white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil, red vinegar, pomegranate molasses, sesame sauce, chopped onion'],
            ['Hummus', 'chickpeas, sesame sauce, olive oil, lemon juice, white pepper'],
            ['Tabbouleh/Fattoush Salad', 'parsley, tomato, bulgur wheat, olive oil, lemon juice'],
            ['Addons','Garlic Potatoes, Rice, Pita']
          ]}
          imageSrc={require('../assets/image 60.png')}
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