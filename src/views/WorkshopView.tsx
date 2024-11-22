import React from 'react';
import './WorkshopView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { RelativeTime } from '../enums';
import { firstDay, secondDay, thirdDay } from '../data/schedule';

import EventListItem from '../components/EventListItem';
import ModalDialog from '../components/ModalDialog';
import { formattedEventTime } from '../utils';
import { DUMMY_EVENT } from '../constants';
import { IEvent } from '../interfaces';
import { Row } from 'react-bootstrap';

const days = [firstDay, secondDay, thirdDay];

const WorkshopView: React.FC = () => {
	const [show, setShow] = React.useState(false);
	const [formattedTime, setFormattedTime] = React.useState('');
	const [workshop, setWorkshop] = React.useState(DUMMY_EVENT);

	const filterWorkshops = (events: IEvent[]) =>
		events.filter(event => event.category.toLowerCase().includes("workshop"));

	return (
		<Container id="workshop-view" fluid>
		<h1 className="text-gradient font-weight-bold mt-4 mb-4">
		Workshops
		</h1>
			<Col>
				{
					<div>
						<ModalDialog
							show={show}
							onHide={() => setShow(false)}
							formattedTime={formattedTime}
							event={workshop}
						/>
						{days.map(
							(day, index) =>
								filterWorkshops(day.events).length !== 0 && (
									<div key={`workshop-day-${index}`} className="workshop-day">
										<h5>Day {index + 1}</h5>
										<div className="workshops ">
											<div className='col-md-12 row'>
											{filterWorkshops(day.events).map((event, index) => (
											<div className='col-md-6'>
												<div
													className="event-item-container"
													key={`event-list-item-${index}`}
													onClick={() => {
														setShow(true);
														setFormattedTime(formattedEventTime(event));
														setWorkshop(event);
													}}
												>
															<EventListItem
																event={event}
																showAsToday={false}
																relativeDayTime={RelativeTime.Future}
															/>
														</div>
											</div>
											))}
										</div>
									</div>
									</div>
								)
						)}
					</div>
				}
			</Col>
		</Container>
	);
};

export default WorkshopView;
