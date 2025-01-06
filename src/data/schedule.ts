import { IEventDay, IEvent } from '../interfaces';
import { EventCategory, Location } from '../enums';

const registrationEvent: IEvent = {
    name: "Registration",
    subtitle: "✨ Check-in & Badge Pickup",
    start: new Date('2025-01-17T17:00:00-05:00'),
    duration: 180,
    category: EventCategory.Main,
    location: Location.CRXLobby,
    description: "🏷️ Pick up your event badge, grab some swag, and get ready to hack!"
};

const dinnerEvent: IEvent = {
    name: "Dinner",
    subtitle: "🍔 Welcome Feast",
    start: new Date('2025-01-17T18:00:00-05:00'),
    duration: 90,
    category: EventCategory.Food,
    location: Location.FoodC309,
    description: "🍽️ Enjoy delicious food while mingling with fellow participants."
};

const openingCeremonyEvent: IEvent = {
    name: "Opening Ceremony",
    subtitle: "🎉 Official Kickoff",
    start: new Date('2025-01-17T20:00:00-05:00'),
    duration: 90,
    category: EventCategory.Main,
    location: Location.UCUAuditorium,
    description: "🎤 The event begins! Hear from inspiring speakers and get pumped!"
};

const careerFairEvent: IEvent = {
    name: "Career Fair",
    subtitle: "💼 Meet Industry Pros",
    start: new Date('2025-01-17T21:30:00-05:00'),
    duration: 120,
    category: EventCategory.Career,
    location: Location.CRXLobby,
    description: "🤝 Connect with recruiters and explore awesome career opportunities."
};

const teamFormationEvent: IEvent = {
    name: "Team Formation",
    subtitle: "🧑‍🤝‍🧑 Find Your Dream Team",
    start: new Date('2025-01-17T21:30:00-05:00'),
    duration: 60,
    category: EventCategory.Activity1,
    location: Location.RestRoomFloor5,
    description: "📝 Join a team or form your own to work on your hackathon project!"
};

const hackingBeginsEvent: IEvent = {
    name: "Hacking Begins",
    subtitle: "👩‍💻 Let the Coding Begin!",
    duration: 0,
    start: new Date('2025-01-17T23:00:00-05:00'),
    category: EventCategory.Main,
    description: "💻 It's time to start building your masterpiece!"
};

const midnightSnackEvent: IEvent = {
    name: "Midnight Snack",
    subtitle: "🍕 Fuel for the Night",
    start: new Date('2025-01-18T00:00:00-05:00'),
    duration: 90,
    category: EventCategory.Food,
    location: Location.FoodC309,
    description: "🌙 Grab a tasty snack and keep the energy high as you hack into the night."
};

const breakfastEvent: IEvent = {
    name: "Breakfast",
    subtitle: "🥞 Morning Fuel",
    start: new Date('2025-01-18T07:00:00-05:00'),
    duration: 90,
    category: EventCategory.Food,
    location: Location.FoodC309,
    description: "🍳 Wake up and start your day with a hearty breakfast!"
};

const caffeineCafeEvent: IEvent = {
    name: "Caffeine Cafe",
    subtitle: "☕ Coffee & Snacks",
    start: new Date('2025-01-18T11:00:00-05:00'),
    duration: 60,
    category: EventCategory.Food,
    location: Location.CRX427,
    description: "🍩 Grab a coffee, a snack, and power through the day!"
};

const workshopEvent: IEvent = {
    name: "Workshop",
    subtitle: "🧑‍🏫 Learn & Grow",
    start: new Date('2025-01-18T11:00:00-05:00'),
    duration: 60, 
    category: EventCategory.Workshop1,
    location: Location.WorkshopC140,
    description: "🎓 Level up your skills with expert-led workshops."
};

const careerFairEvent2: IEvent = {
    name: "Career Fair",
    subtitle: "💼 Meet Industry Pros",
    start: new Date('2025-01-17T11:30:00-05:00'),
    duration: 300,
    category: EventCategory.Career,
    location: Location.CRXLobby,
    description: "🤝 Connect with recruiters and explore awesome career opportunities."
};

const lunchEvent: IEvent = {
    name: "Lunch",
    subtitle: "🍔 Midday Refuel",
    start: new Date('2025-01-18T12:00:00-05:00'),
    duration: 90,
    category: EventCategory.Food,
    location: Location.FoodC309,
    description: "🍲 Take a break, grab a bite, and recharge for the next challenge."
};

const petTherapyEvent: IEvent = {
    name: "Pet Therapy",
    subtitle: "🐶 Relax with Cute Animals",
    start: new Date('2025-01-18T12:00:00-05:00'),
    duration: 90,
    category: EventCategory.Activity2,
    location: Location.CRXLobby,
    description: "🐾 Take a break with therapy animals and de-stress."
};

const workshopEvent2: IEvent = {
    name: "Workshop",
    subtitle: "🧑‍🏫 Learn & Grow",
    start: new Date('2025-01-18T18:00:00-05:00'),
    duration: 60, 
    category: EventCategory.Workshop1,
    location: Location.WorkshopC140,
    description: "🎓 Level up your skills with expert-led workshops."
};

const karaokeEvent: IEvent = {
    name: "Karaoke",
    subtitle: "🎤 Sing Your Heart Out",
    start: new Date('2025-01-18T21:30:00-05:00'),
    duration: 105,
    category: EventCategory.Activity1,
    location: Location.RestRoomFloor5,
    description: "🎶 Grab the mic, sing your favorite song, and have some fun!"
};

const midnightSnackEvent2: IEvent = {
    name: "Midnight Snack",
    subtitle: "🍕 Fuel for the Night",
    start: new Date('2025-01-18T23:30:00-05:00'),
    duration: 120,
    category: EventCategory.Food,
    location: Location.FoodC309,
    description: "🌙 Grab a tasty snack and keep the energy high as you hack into the night."
};

const closingCeremoniesEvent: IEvent = {
    name: "Closing Ceremonies",
    subtitle: "🎉 Awards & Farewell",
    start: new Date('2025-01-19T14:30:00-05:00'),
    duration: 60,
    category: EventCategory.Main,
    location: Location.UCUAuditorium,
    description: "🏆 Celebrate the end of an amazing hackathon with awards and final speeches!"
};

const hackingEndsEvent: IEvent = {
    name: "Hacking Ends",
    subtitle: "💻 Submit Your Code",
    start: new Date('2025-01-19T10:00:00-05:00'),
    duration: 0,
    category: EventCategory.Main,
    description: "🏁 Final push! Submit your project and wrap up your hackathon journey!"
};

const demosEvent: IEvent = {
    name: "Demos (Judging)",
    subtitle: "🖥️ Project Presentations",
    start: new Date('2025-01-19T11:00:00-05:00'),
    duration: 150,
    category: EventCategory.Main,
    location: Location.CRX140,
    description: "👨‍💻 Present your creation to the judges and impress them with your work!"
};

const finalLunchEvent: IEvent = {
    name: "Lunch",
    subtitle: "🍽️ Midday Meal",
    start: new Date('2025-01-19T13:00:00-05:00'),
    duration: 90,
    category: EventCategory.Food,
    location: Location.FoodC309,
    description: "🍕 Enjoy a relaxing lunch before the final ceremony."
};

const firstEventDay: IEventDay = {
    index: 0,
    title: "Friday 🎉",
    longTitle: "Friday, January 17",
    date: new Date('2025-01-17'),
    events: [
        registrationEvent, 
        dinnerEvent, 
        openingCeremonyEvent,
        careerFairEvent, 
        teamFormationEvent, 
        hackingBeginsEvent
    ]
};

const secondEventDay: IEventDay = {
    index: 1,
    title: "Saturday 🕺",
    longTitle: "Saturday, January 18",
    date: new Date('2025-01-18'),
    events: [
        midnightSnackEvent, 
        breakfastEvent, 
        caffeineCafeEvent, 
        workshopEvent,
        careerFairEvent2,
        lunchEvent,
        petTherapyEvent,
        dinnerEvent,
        workshopEvent2,
        karaokeEvent,
		midnightSnackEvent2
    ]
};

const thirdEventDay: IEventDay = {
    index: 2,
    title: "Sunday 🌅",
    longTitle: "Sunday, January 19",
    date: new Date('2025-01-19'),
    events: [
        midnightSnackEvent,
        breakfastEvent,
        hackingEndsEvent,
        demosEvent,
        finalLunchEvent,
        closingCeremoniesEvent
    ]
};

export const uOttaHack = { firstEventDay, secondEventDay, thirdEventDay };

export const dayAfterLastDay = new Date('2025-01-20T00:00:00-06:00');
