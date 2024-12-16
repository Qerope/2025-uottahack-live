import { IEventDay, IEvent } from '../interfaces';
import { EventCategory, Location } from '../enums';

const sampleEvent: IEvent =
{
	name: "Tech Innovations Conference",
	subtitle: "The Future of AI",
	start: new Date('2024-05-15T09:00:00Z'),
	duration: 120,  // Duration in minutes
	category: EventCategory.Activity1,
	location: "San Francisco Convention Center, San Francisco, CA",
	description: "A conference exploring the latest innovations in AI technology and its applications across industries."
};

const firstEventDay: IEventDay = {
	index: 0,
	title: "Friday",
	longTitle: "Day 1",
	date: new Date('2025-01-15'),
	events: [
		sampleEvent
	]
};
const secondEventDay: IEventDay = {
	index: 1,
	title: "Saturday",
	longTitle: "Day 2",
	date: new Date('2025-01-16'),
	events: [
		sampleEvent
	]
};
const thirdEventDay: IEventDay = {
	index: 2,
	title: "Sunday",
	longTitle: "Day 3",
	date: new Date('2025-01-17'),
	events: [
		sampleEvent
	]
};


export const uOttaHack = { firstEventDay, secondEventDay, thirdEventDay };

export const dayAfterLastDay = new Date('2024-03-04T00:00:00-06:00');
