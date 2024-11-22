import { RoutePath, EventCategory } from './enums';
import { IRouteItem, IEvent } from './interfaces';

import ScheduleView from './views/ScheduleView';
import InfoView from './views/InfoView';
import WorkshopView from './views/WorkshopView';
import MapView from './views/MapView';
import FoodMenuView from './views/FoodMenuView';
import ContactView from './views/ContactView';
import ChallengeView from './views/ChallengeView';

const SHOW_AS_LIVE_DATES = true;
const MOBILE_BREAKPOINT_WIDTH = 992;
const ONE_MINUTE_MILLISECOND = 60000;
const EVENT_LIST_ITEM_HEIGHT = 72;
const ROUTES_WITH_TITLES: IRouteItem[] = [
	{
		path: [RoutePath.Home, RoutePath.Schedule],
		title: 'Schedule',
		component: ScheduleView
	},
	{
		path: RoutePath.Info,
		title: 'Information',
		component: InfoView
	},
	{
		path: RoutePath.Challenge,
		title: 'Challenges',
		component: ChallengeView
	},
	{
		path: RoutePath.Workshop,
		title: 'Workshops',
		component: WorkshopView
	},
	{
		path: RoutePath.Map,
		title: 'Floor Plan',
		component: MapView
	},
	{
		path: RoutePath.Food,
		title: 'Food Menu',
		component: FoodMenuView
	},
	{
		path: RoutePath.Contact,
		title: 'Contact',
		component: ContactView
	}
];
const CLOCK_EMOJI_HOUR_LIST = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚'];
const CLOCK_EMOJI_THIRTY_LIST = ['🕧', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦'];

const DUMMY_EVENT: IEvent = {
	name: '',
	start: new Date(),
	duration: 0,
	category: EventCategory.Default,
	location: '',
	description: ''
};

export {
	SHOW_AS_LIVE_DATES,
	MOBILE_BREAKPOINT_WIDTH,
	ONE_MINUTE_MILLISECOND,
	EVENT_LIST_ITEM_HEIGHT,
	ROUTES_WITH_TITLES,
	CLOCK_EMOJI_HOUR_LIST,
	CLOCK_EMOJI_THIRTY_LIST,
	DUMMY_EVENT
};
