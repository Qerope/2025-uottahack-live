export enum EventCategory {
	Default = 'default',
	Food = 'food',
	Workshop1 = 'workshop1',
	Workshop2 = 'workshop2',
	Workshop3 = 'workshop3',
	Workshop4 = 'workshop4',
	Activity1 = 'activity1',
	Activity2 = 'activity2',
	TechTalk = 'techtalk',
	Career = 'career',
	Hacker = 'hacker'
}

export const EventCategoryColor: {
	[category: string]: string;
} = {
	[EventCategory.Default]: 'grey',
	[EventCategory.Food]: 'deepskyblue',
	[EventCategory.Workshop1]: 'purple',
	[EventCategory.Workshop2]: 'purple',
	[EventCategory.Workshop3]: 'purple',
	[EventCategory.Workshop4]: 'purple',
	[EventCategory.Activity1]: 'lightpink',
	[EventCategory.Activity2]: 'lightpink',
	[EventCategory.TechTalk]: 'lightpink',
	[EventCategory.Career]: 'indianred',
	[EventCategory.Hacker]: 'lightgreen'
	// navy
};

export enum RoutePath {
	Info = '/info',
	Schedule = '/schedule',
	Map = '/map',
	Challenge = '/challenges',
	Workshop = '/workshops',
	Food = '/food',
	Contact = '/contact',
	Chat = "/chat"
}

export enum Location {
	None = '',
	CareerFair = 'CRX Lobby',
	WorkshopC308 = 'Workshop Room C308',
	WorkshopC309 = 'Workshop Room C309',
	WorkshopC010 = 'Workshop Room C010',
	WorkshopC040 = 'Workshop Room C040',
	Staging = 'Staging - First Floor Classroom',
	Lobby = 'CRX Lobby',
	HackerSpace = 'Hacker Space Floor 5',
	MovieTheatre = 'Movie Theater C240',
	SecondFloor = 'Second Floor',
	Karaoke = 'CRX C220',
	InternPanel = 'CRX C240',
	REST = 'REST Room - 5th floor',
	UCU = 'UCU - follow guides to different building',
	UCUAud = 'UCU Auditorium',
	Food = 'Food Room C307',
	RestRoom = 'CRX Floor 5',
	Demo = 'CRX C140',
	CRX140 = 'CRX C140',
	Canal = 'Rideau Canal',
	CRX = 'CRX',
	Mexico = 'Mexico 🇲🇽'
}

export enum RelativeTime {
	Past = 'past',
	Present = 'present',
	Future = 'future'
}

export enum EventListener {
	Resize = 'resize'
}
