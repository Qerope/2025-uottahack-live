import React, { useState } from 'react';
import './ScheduleView.css';

import { ONE_MINUTE_MILLISECOND, SHOW_AS_LIVE_DATES, MOBILE_BREAKPOINT_WIDTH } from '../constants';
import { EventListener, RelativeTime } from '../enums';
import { IEventDay } from '../interfaces';
import { dayAfterLastDay } from '../data/schedule';
import { uOttaHack } from '../data/schedule';
import { getRelativeDayTime } from '../utils';

import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import TimelineComponent from '../components/TimelineComponent';
import EventListComponent from '../components/EventListComponent';
import { Row } from 'react-bootstrap';

const event = uOttaHack;
const days: [IEventDay, IEventDay, IEventDay] = [uOttaHack.firstDay, uOttaHack.secondDay, uOttaHack.thirdDay];

days.forEach(day => day.events.forEach(event => (event.duration = Math.abs(event.duration))));

const ScheduleView: React.FC = () => {
	
	const [daysVar, setDays] = React.useState([uOttaHack.firstDay, uOttaHack.secondDay, uOttaHack.thirdDay]);
	const firstDay = daysVar[0];
	const secondDay = daysVar[1];
	const thirdDay = daysVar[2];

	let initialDay = firstDay;
	if (getRelativeDayTime(secondDay.date) === RelativeTime.Present) {
		initialDay = secondDay;
	} else if (getRelativeDayTime(thirdDay.date) === RelativeTime.Present) {
		initialDay = thirdDay;
	}

	const [mobile, setMobile] = React.useState(true);
	const [day, setDay] = React.useState(initialDay);
	const [, setDummy] = React.useState();
	const [activeColor, setActiveColor] = React.useState('#3C99D6')

	const updateDimensions = () => {
		const isMobile = window.innerWidth < MOBILE_BREAKPOINT_WIDTH;
		if (mobile !== isMobile) {
			setMobile(isMobile);
		}
	};

	React.useEffect(() => {
		updateDimensions();
		window.addEventListener(EventListener.Resize, updateDimensions);
		const interval = setInterval(() => {
			setDummy({});
		}, ONE_MINUTE_MILLISECOND);

		return () => {
			window.removeEventListener(EventListener.Resize, updateDimensions);
			clearInterval(interval);
		};
	});

	const hasPassed = new Date().getTime() >= dayAfterLastDay.getTime();
	const relativeDayTime = hasPassed ? RelativeTime.Future : getRelativeDayTime(day.date);
	const showAsToday = (relativeDayTime === RelativeTime.Present || !SHOW_AS_LIVE_DATES) && !hasPassed;

	return (
		<Container id="schedule" fluid>
			<div className="d-flex flex-column" >
				<ButtonGroup>
					{daysVar.map((dayInfo, index) => (
						<Button
							key={`btn-group-${index}`}
							onClick={() => setDay(dayInfo)}
							className='ml-2 mr-2 mb-2 mt-4'
							style={{backgroundColor: index === day.index ? activeColor : '#f8f9fa', border: "0px", borderRadius: "2.5rem", fontWeight: index === day.index ? 700 : 500, padding: "0.8rem 0 0.8rem 0"}}
							variant={index === day.index ? 'dark' : 'light'}
						>
							{(!mobile && dayInfo.longTitle) || dayInfo.title}
						</Button>
					))}
				</ButtonGroup>
			</div>
			<Row>
				<div className='col-md-9 col-sm-12 mt-2'>
					<div className='mr-2 ml-2'>
						<TimelineComponent day={day} showAsToday={showAsToday} relativeDayTime={relativeDayTime} />
					</div>
				</div>
				<div className='col-md-3 mt-2'>
					<div className='ml-2 mr-2'>
						<EventListComponent key={day.title} day={day} showAsToday={showAsToday} relativeDayTime={relativeDayTime} />
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default ScheduleView;
