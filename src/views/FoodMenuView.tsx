import React from 'react';
import './FoodMenuView.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { getRelativeDayTime } from '../utils';
import { secondDay, thirdDay } from '../data/schedule';
import { RelativeTime, EventListener } from '../enums';
import { MOBILE_BREAKPOINT_WIDTH } from '../constants';
import { Row } from 'react-bootstrap';



	const FoodCard = ({ meal="", title="", items=[["",""]], n=1, html=(<></>) }) => (
		<div className={'col-md-'+12/n+' col-sm-12  mt-2'}>
				<div className="card p-3 mb-2 rounded">
					<div className="mt-3">
						<div className="d-flex justify-content-between">
							<h3 className="heading font-weight-bold">{meal}</h3>
							{title!="" && <div className="badge"> <span>{title}</span> </div>}
						</div>
						<div className="mt-1">
							<div className="mt-3"> 
							{html!=(<></>) && html}
							{
							items[0][0]!="" && 
								items.map((itemi) => (
									<div className="mt-3"> 
									<span className="text1">{itemi[0]}: <span className='text2'>{itemi[1]}</span></span> </div>
							))}
						</div>
					</div>
				</div>
				</div>
				</div>
  );

const day1 = (
	<div>
		
		<FoodCard
				meal="Dinner 🥖"
				title="Subway 🚇"
				items={[
				  ['Subway Sandwich', 'choice of bread, protein (e.g., turkey, ham, veggie patty), various vegetables, cheese, sauce'],
				  ['Chips', 'potato chips or any preferred side'],
				  ['Salad', 'lettuce, tomatoes, cucumbers, olives, dressing'],
				  ['Add-ons', 'pickles, jalapeños, onions, extra cheese']
				]}				
			/>
	</div>
);

const day2 = (
	<div className='row'>
		
		<FoodCard
				meal="Breakfast 🥐"
				items={[
					['Baked Goods', 'Muffins, croissants, braided apple turnovers, mini chocolatines'],
					['Bagels', 'Kettleman\'s bagels & cream cheese'],
					['Fruits','Apples, clementines, bananas'],
					['Beverages','Coffee, tea, water, redbull ;)']
				]}
				n={3}
			/>
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
				n={3}
			/>
		<FoodCard
				meal="Dinner 🫔"
				title="BiBi's 🌯"
				items={[
					['Beef/Chicken/Falafel Wrap', 'white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil, red vinegar, pomegranate molasses, sesame sauce, chopped onion'],
					['Hummus Bowl', 'chickpeas, sesame sauce, olive oil, lemon juice, white pepper'],
					['Tabbouleh/Fattoush Salad', 'parsley, tomato, bulgur wheat, olive oil, lemon juice'],
					['Addons','Garlic Potatoes, Rice, Pita']
				]}
				n={3}
			/>

	</div>
);

const day3 = (
	<div className='row'>
		
		<FoodCard
				meal="Breakfast 🥐"
				items={[
					['Baked Goods', 'muffins, croissants, braided apple turnovers, mini chocolatines'],
					['Bagels', 'Kettleman\'s bagels & cream cheese'],
					['Fruits','Apples, clementines, bananas'],
					['Beverages','Coffee, tea, water, redbull ;)']
				]}
				n={3}
			/>
		<FoodCard
				meal="Lunch 🥪"
				items={[
					['Beef/Chicken/Falafel', 'white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil, red vinegar, pomegranate molasses, sesame sauce, chopped onion'],
					['Hummus', 'chickpeas, sesame sauce, olive oil, lemon juice, white pepper'],
					['Tabbouleh/Fattoush Salad', 'parsley, tomato, bulgur wheat, olive oil, lemon juice'],
					['Addons','Garlic Potatoes, Rice, Pita']
				]}
				n={3}
			/>

	</div>
);

const days = [day1, day2, day3];
const dayLabels = ['Fri', 'Sat', 'Sun'];
const dayLabelsLong = ['Friday March 1', 'Saturday March 2', 'Sunday March 3'];

const FoodMenuView: React.FC = () => {
	let initialDay = 0;
	if (getRelativeDayTime(secondDay.date) === RelativeTime.Present) {
		initialDay = 1;
	} else if (getRelativeDayTime(thirdDay.date) === RelativeTime.Present) {
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
					<ButtonGroup className="button-group rounded">
						{(mobile ? dayLabels : dayLabelsLong).map((label, index) => (
							<Button
								className='ml-2 mr-2 mb-2 mt-4'
								key={`button-${index}`}
								onClick={() => handleClick(index)}
								style={{backgroundColor: index === button ? '#3C99D6' : '#f8f9fa', border:"0", fontWeight: index === button ? 700 : 400, borderRadius: "2.5rem", padding: "0.8rem 0 0.8rem 0"}}
								variant={index === button ? 'dark' : 'light'}
							>
								{label}
							</Button>
						))}
					</ButtonGroup>
				</div>
				{days[button]}

			</Col>
		</Container>
	);
};

export default FoodMenuView;
