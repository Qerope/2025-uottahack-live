import { IEventDay } from '../interfaces';
import { EventCategory, Location } from '../enums';

export const firstDay: IEventDay = {
	index: 0,
	title: '🥳 Fri',
	longTitle: 'Friday March 1',
	date: new Date('2024-03-01T00:00:00-05:00'),
	events: [
		{
		  "name": "Registration",
		  "start": new Date("2024-03-01T17:00:00-05:00"),
		  "duration": 300,
		  "category": EventCategory.Default,
		  "location": Location.Lobby,
		  "description": "Bring a valid government issued ID and head over to the registration tables to officially sign in for uOttahack 6! 📝"
		},
		{
		  "name": "Dinner",
		  "start": new Date("2024-03-01T18:00:00-05:00"),
		  "duration": 90,
		  "category": EventCategory.Food,
		  "location": Location.Food,
		  "description": "Food Room C307 🍽️"
		},
		{
		  "name": "Opening Ceremony",
		  "start": new Date("2024-03-01T19:30:00-05:00"),
		  "duration": 120,
		  "category": EventCategory.Activity1,
		  "location": Location.UCUAud,
		  "description": "Join organizers, sponsors, and hackers to kick-start uOttaHack 6 this year! Learn about sponsors, workshops, challenges, prizes, and resources. Follow our purple-shirted guides to the UCU theater to get uOttaHack 6 underway! 🚀"
		},
		{
		  "name": "Career Fair",
		  "start": new Date("2024-03-01T21:30:00-05:00"),
		  "duration": 120,
		  "category": EventCategory.Career,
		  "location": Location.Lobby,
		  "description": "The uOttaHack career fair will allow you to connect with recruiters and technical company reps from top companies! Learn about job opportunities, get advice on your career journey, and load up on some cool company swag. You don't want to miss this exciting networking event! 🤝"
		},
		{
		  "name": "Team Formation",
		  "start": new Date("2024-03-01T22:30:00-05:00"),
		  "duration": 30,
		  "category": EventCategory.Default,
		  "location": Location.RestRoom,
		  "description": "Get ready to form your dream team! 💼"
		},
		{
			"name": "Midnight Snack",
			"start": new Date("2024-01-02T23:59:00-05:00"),
			"duration": 0,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Ramen 🍜"
		},
		{
			"name": "Intro to Git Workshop",
			"start": new Date("2024-03-01T23:30:00-05:00"),
			"duration": 29,
			"category": EventCategory.Workshop1,
			"location": Location.WorkshopC010, // NO LOCATION PROVIDED
			"description": "Dive into the world of Git! 💻"
		},
		{
		  "name": "Hacking Begins",
		  "start": new Date("2024-03-01T23:00:00-05:00"),
		  "duration": 0,
		  "category": EventCategory.Hacker,
		  "location": Location.None,
		  "description": "Let the hacking commence! 🚀💻"
		},
	]
};

export const secondDay: IEventDay = {
	index: 1,
	title: '🌟 Sat',
	longTitle: 'Saturday March 2',
	date: new Date('2024-03-02T00:00:00-05:00'),
	events: [
		{
			"name": "Midnight Snack",
			"start": new Date("2024-01-02T00:00:00-05:00"),
			"duration": 60,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Ramen 🍜"
		},
		{
			"name": "Breakfast",
			"start": new Date("2024-03-02T07:00:00-05:00"),
			"duration": 90,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Breakfast will feature bagels, fruits, coffee, and pastries ☕🍩"
		},
		{
			"name": "Pet Therapy",
			"start": new Date("2024-03-02T08:00:00-05:00"),
			"duration": 180,
			"category": EventCategory.Activity1,
			"location": Location.Lobby,
			"description": "Show some affection to our very special therapy dogs! This will help release all the tension built up from coding your projects over the last 36 hours! Don't forget to bring donations 🐾💖"
		},
		{
			"name": "AWS Workshop",
			"start": new Date("2024-03-02T09:30:00-05:00"),
			"duration": 60,
			"category": EventCategory.TechTalk,
			"location": Location.WorkshopC309,
			"description": "🚀 Join Tae Kim, solutions architect at AWS, as he explores the fascinating realm of digital twins and their real-life applications of AWS!"
		},
		{
			"name": "Ivan Wanis Ruiz",
			"start": new Date("2024-03-02T10:30:00-05:00"),
			"duration": 30,
			"category": EventCategory.Activity2,
			"location": Location.CRX140,
			"description": "🐳🚀"
		},
		{
			"name": "Ford Workshop",
			"start": new Date("2024-03-02T11:00:00-05:00"),
			"duration": 60,
			"category": EventCategory.Workshop3,
			"location": Location.WorkshopC308,
			"description": "Ford's workshop"
		},
		{
			"name": "CEED: 3D Printing Workshop",
			"start": new Date("2024-03-02T11:00:00-05:00"),
			"duration": 60,
			"category": EventCategory.Workshop2,
			"location": Location.WorkshopC309,
			"description": "In this basic workshop, you will learn the basics on how to design and 3D print objects. You will learn how to use basic 3D design software [TinkerCAD] to create a personalized object then how to 3D print your object on the various printers in the Makerspace."
		},
		{
			"name": "Lunch",
			"start": new Date("2024-03-02T11:00:00-05:00"),
			"duration": 90,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Raon Kitchen (Korean Bibimbap) 🍲🥢"
		},
		{
			"name": "Career Fair",
			"start": new Date("2024-03-02T11:30:00-05:00"),
			"duration": 300,
			"category": EventCategory.Career,
			"location": Location.Lobby,
			"description": "Connect with recruiters and technical company reps from top companies! Learn about job opportunities, get advice on your career journey, and load up on some cool company swag. Don't miss this exciting networking event! 🤝👔"
		},
		{
			"name": "Pitch Workshop",
			"start": new Date("2024-03-02T13:00:00-05:00"),
			"duration": 60,
			"category": EventCategory.Activity1,
			"location": Location.CRX, // NO LOCATION PROVIDED
			"description": "Join Ivan Wanis for an amazing workshop on pitching."
		},
		{
			"name": "Shaping Your Career in Tech",
			"start": new Date("2024-03-02T14:00:00-05:00"),
			"duration": 30,
			"category": EventCategory.Workshop3,
			"location": Location.CRX140, // NO LOCATION PROVIDED
			"description": "Join Karim Al Ghoul and get amazing insights on your future career with a workshop on Shaping your carrer in tech."
		},
		{
			"name": "uOttawa Game Dev Club Workshop",
			"start": new Date("2024-03-02T15:30:00-05:00"),
			"duration": 150,
			"category": EventCategory.Workshop2,
			"location": Location.WorkshopC040,
			"description": "Join the uOttawa Game Dev Club for an intro workshop on game development in Java! In this hands-on workshop, you’ll use the JavaFX library to create a basic bullet hell game from the ground up, learning how to code a game loop, draw and move game entities, register basic collisions and more! \n If you want to follow along, please download the following in advance: the latest version of IntelliJ Idea Community Edition (https://www.jetbrains.com/idea/download/?section=windows ) and the JavaFX runtime (https://openjfx.io/)"
		},
		{
			"name": "CSE Workshop",
			"start": new Date("2024-03-02T15:30:00-05:00"),
			"duration": 30,
			"category": EventCategory.Workshop1,
			"location": Location.WorkshopC309,
			"description": "Accessibility isn't just a 'nice-to-have' feature for the Government of Canada - it's the law. Learn why we care about creating accessible websites, and how we as developers can make it happen. ♿💻"
		},
		{
			"name": "Intern Panel",
			"start": new Date("2024-03-02T16:00:00-05:00"),
			"duration": 60,
			"category": EventCategory.Activity2,
			"location": Location.InternPanel,
			"description": "🌟 Learn from experienced interns! (No details available)"
		},
		{
			"name": "MLH Challenge",
			"start": new Date("2024-03-02T16:30:00-05:00"),
			"duration": 60,
			"category": EventCategory.Hacker,
			"location": Location.WorkshopC308,
			"description": "🏆 MLH Challenge (No details available)"
		},
		{
			"name": "Speed Networking",
			"start": new Date("2024-03-02T17:30:00-05:00"),
			"duration": 60,
			"category": EventCategory.Activity1,
			"location": Location.RestRoom,
			"description": "Similar to speed dating, speed-networking allows you to connect with sponsors 1-on-1 and expand your network in a short amount of time. This fun, fast-paced event is a great way to let recruiters know who you are and what you are looking for in an internship. You'll have 1-2 minutes to speak with a recruiter from a sponsoring company before the timer goes off and you shift chairs to meet a new recruiter! Don't miss this opportunity to grow your network, exchange ideas, and jumpstart your career! 🚀🤝"
		},
		{
			"name": "Dinner",
			"start": new Date("2024-03-02T18:30:00-05:00"),
			"duration": 60,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Hint: I exist on every block in Ottawa 🕵️‍♂️🍽️"
		},
		{
			"name": "MLH Fun Event",
			"start": new Date("2024-03-02T19:30:00-05:00"),
			"duration": 45,
			"category": EventCategory.Activity2,
			"location": Location.CRX,
			"description": "🎉 MLH Fun Event (No details available)"
		},
		{
			"name": "Solace Workshop",
			 "start": new Date("2024-03-02T20:00:00-05:00"),
			 "duration": 60,
			 "category": EventCategory.Workshop3,
			 "location": Location.WorkshopC308,
			 "description": "Join Solace engineers to learn more about the benefit of event driven applications. Bring your laptops as we’ll be walking through a tutorial of how to build an app connected to the Solace PubSub+ message broker in Solace PubSub+ Cloud. Come with your questions ready as we’ll have multiple engineers on hand to answer them. Remember if you build your hack with Solace PubSub+, you’ll have your chance to win Solace’s hackathon challenge and 4 sets of $250 Amazon gift cards! 🚀💻"
		  },
		{
			"name": "Kahoot/Family Feud",
			"start": new Date("2024-03-02T20:30:00-05:00"),
			"duration": 60,
			"category": EventCategory.Activity2,
			"location": Location.CRX,  // NO LOCATION PROVIDED
			"description": "🎲 Kahoot/Family Feud"
		},
		{
			"name": "Karaoke",
			"start": new Date("2024-03-02T21:45:00-05:00"),
			"duration": 90,
			"category": EventCategory.Activity1,
			"location": Location.Karaoke,
			"description": "Show off your vocal skills and have a blast singing your favorite tunes with friends! This is a great opportunity to let loose and take a break from coding. Don't miss out on the fun! 🎤🎶"
		},
		{
			"name": "Midnight Snack (Popcorn)",
			"start": new Date("2024-03-02T23:30:00-05:00"),
			"duration": 29,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Nothing like pairing a movie with freshly popped popcorn! 🍿"
		},
		{
			"name": "Sunday Scaries",
			"start": new Date("2024-03-02T23:59:00-05:00"),
			"duration": 0,
			"category": EventCategory.Activity1,
			"location": Location.InternPanel,
			"description": "Are you a horror film fanatic? Or do you absolutely hate horror films? Either way, this scary movie night with friends is sure to get the adrenaline pumping. Nightmares are a guarantee, so you won't even need to sleep, ensuring that you work on your project all night. Don't miss out on the Saturday Scaries event! 👻🍿"
		},
	]
};

export const thirdDay: IEventDay = {
	index: 2,
	title: '🌞 Sun',
	longTitle: 'Sunday March 3',
	date: new Date('2024-03-03T00:00:00-05:00'),
	events: [
		{
			"name": "Sunday Scaries",
			"start": new Date("2024-03-03T00:00:00-05:00"),
			"duration": 120,
			"category": EventCategory.Activity1,
			"location": Location.InternPanel,
			"description": "Are you a horror film fanatic? Or do you absolutely hate horror films? Either way, this scary movie night with friends is sure to get the adrenaline pumping. Nightmares are a guarantee, so you won't even need to sleep, ensuring that you work on your project all night. Don't miss out on the Saturday Scaries event! 👻🍿"
		},
		{
			"name": "Midnight Snack (Popcorn)",
			"start": new Date("2024-03-01T00:00:00-05:00"),
			"duration": 90,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Nothing like pairing a movie with freshly popped popcorn! 🍿"
		},
		{
			"name": "Breakfast",
			"start": new Date("2024-03-03T07:00:00-05:00"),
			"duration": 90,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Breakfast will feature pastries, fruits, coffee, and pancakes ☕🥞"
		},
		{
			"name": "Hacking Ends",
			"start": new Date("2024-03-03T10:00:00-05:00"),
			"duration": 0,
			"category": EventCategory.Hacker,
			"location": Location.Lobby,
			"description": "It's time to wrap up your coding marathon and get ready to showcase your amazing projects!"
		},
		{
			"name": "Judging Briefing Session",
			"start": new Date("2024-03-03T10:00:00-05:00"),
			"duration": 30,
			"category": EventCategory.Activity1,
			"location": Location.Lobby,
			"description": ""
		},
		{
			"name": "Demos",
			"start": new Date("2024-03-03T10:30:00-05:00"),
			"duration": 180,
			"category": EventCategory.Default,
			"location": Location.Demo,
			"description": "Show off all your hard work from the last 36 hours! Demonstrate the ins and outs of your project to judges and let your project shine for itself. Give yourself a pat on the back - you've made it to the end! 🚀🏆"
		},
		{
			"name": "Lunch",
			"start": new Date("2024-03-03T13:00:00-05:00"),
			"duration": 90,
			"category": EventCategory.Food,
			"location": Location.Food,
			"description": "Banh Mi & Noodles 🍜"
		},
		{
			"name": "Closing Ceremonies",
			"start": new Date("2024-03-03T14:30:00-05:00"),
			"duration": 60,
			"category": EventCategory.Hacker,
			"location": Location.UCUAud,
			"description": "Join organizers, sponsors, and hackers to wrap-up the incredible uOttaHack 2024 journey! 🎉"
		}
	]
};

export const firstDayMex: IEventDay = {
	index: 0,
	title: '🏜️ Fri',
	longTitle: 'Friday March 1',
	date: new Date('2024-03-01T00:00:00-06:00'),
	events: [
		{
			"name": "Participants Registration",
			"start": new Date("2024-03-01T18:00:00-06:00"),
			"duration": 60,
			"category": EventCategory.Default,
			"location": Location.Mexico,
			"description": "Official registration for iHack-Tec. Please bring a valid government-issued ID. 📝"
		},
		{
			"name": "Opening Ceremony",
			"start": new Date("2024-03-01T19:00:00-06:00"),
			"duration": 60,
			"category": EventCategory.Activity1,
			"location": Location.Mexico,
			"description": "Join us for the grand opening ceremony! 🎉"
		},
		{
			"name": "Dinner",
			"start": new Date("2024-03-01T20:00:00-06:00"),
			"duration": 30,
			"category": EventCategory.Activity2,
			"location": Location.Mexico,
			"description": "Enjoy a delicious dinner to fuel up for the hackathon ahead. 🍽️"
		},
		{
			"name": "Hack Begins",
			"start": new Date("2024-03-01T20:30:00-06:00"),
			"duration": 0,
			"category": EventCategory.Default,
			"location": Location.Mexico,
			"description": "Start hacking on your innovative projects! 💻🚀"
		},
		{
			"name": "Pitch Workshop - How to Sell Your Idea? - SAI2D",
			"start": new Date("2024-03-01T21:30:00-06:00"),
			"duration": 30,
			"category": EventCategory.Workshop1,
			"location": Location.Mexico,
			"description": "Learn valuable tips on how to effectively pitch and sell your ideas. 🗣️"
		},
		{
			"name": "Kahoot dynamic",
			"start": new Date("2024-03-01T22:59:00-06:00"),
			"duration": 0,
			"category": EventCategory.Workshop2,
			"location": Location.Mexico,
            "description": "Engage in a fun and interactive Kahoot session! 🎮"
		},
	]
};

export const secondDayMex: IEventDay = {
	index: 1,
	title: '🇲🇽 Sat',
	longTitle: 'Saturday March 2',
	date: new Date('2024-03-02T00:00:00-06:00'),
	events: [
		{
			"name": "Kahoot Dynamic",
			"start": new Date("2024-03-02T00:00:00-06:00"),
			"duration": 30,
			"category": EventCategory.Workshop2,
			"location": Location.Mexico,
			"description": "Start the day with an engaging Kahoot session to energize and get ready for the exciting events ahead. Grab a snack and join the fun at 12:00 am!"
		},
		{
			"name": "Breakfast",
			"start": new Date("2024-03-02T09:30:00-06:00"),
			"duration": 60,
			"category": EventCategory.Food,
			"location": Location.Mexico,
			"description": "Enjoy a delicious breakfast at 9:30 am to fuel up for a day filled with learning, networking, and innovation discussions."
		},
		{
			"name": "Pitch Practice",
			"start": new Date("2024-03-02T09:30:00-06:00"),
			"duration": 120,
			"category": EventCategory.Workshop1,
			"location": Location.Mexico,
			"description": "Participate in pitch practice sessions from 9:30 am to 11:30 am. Polish your presentation skills and receive valuable feedback to make your pitch shine."
		},
		{
			"name": "Seisa Talk - Energetic Transformation",
			"start": new Date("2024-03-02T11:30:00-06:00"),
			"duration": 60,
			"category": EventCategory.Workshop2,
			"location": Location.Mexico,
			"description": "Join the Seisa Talk on Energetic Transformation at 11:30 am. Explore innovative ideas and insights on how energy transformation can shape the future."
		},
		{
			"name": "Lunch",
			"start": new Date("2024-03-02T12:30:00-06:00"),
			"duration": 90,
			"category": EventCategory.Food,
			"location": Location.Mexico,
			"description": "Take a break and enjoy a delicious lunch at 12:30 pm. Connect with fellow participants and continue the discussions in a relaxed setting."
		},
		{
			"name": "Sustainable Innovation Panel",
			"start": new Date("2024-03-02T14:00:00-06:00"),
			"duration": 90,
			"category": EventCategory.Activity1,
			"location": Location.Mexico,
			"description": "From 2:00 pm to 3:30 pm, dive into the Sustainable Innovation Panel. Explore cutting-edge ideas and practices for building a sustainable and innovative future."
		},
		{
			"name": "CV Workshop (CVDP)",
			"start": new Date("2024-03-02T16:00:00-06:00"),
			"duration": 45,
			"category": EventCategory.Workshop2,
			"location": Location.Mexico,
			"description": "Participate in the CV Workshop (CVDP) from 4:00 pm to 4:45 pm. Enhance your resume and learn valuable tips to stand out in the professional world."
		},
		{
			"name": "Accenture Talk - Generative AI",
			"start": new Date("2024-03-02T17:00:00-06:00"),
			"duration": 60,
			"category": EventCategory.Workshop1,
			"location": Location.Mexico,
			"description": "Don't miss the Accenture Talk on Generative AI from 5:00 pm to 6:00 pm. Explore the world of artificial intelligence and its generative capabilities."
		},
		{
			"name": "Pitch Practice",
			"start": new Date("2024-03-02T20:00:00-06:00"),
			"duration": 120,
			"category": EventCategory.Workshop2,
			"location": Location.Mexico,
			"description": "Fine-tune your pitch skills in the evening session from 8:00 pm to 10:00 pm. Get ready to impress with a compelling and polished presentation."
		},
		{
			"name": "Dinner",
			"start": new Date("2024-03-02T21:00:00-06:00"),
			"duration": 60,
			"category": EventCategory.Food,
			"location": Location.Mexico,
			"description": "Wrap up the day with a delightful dinner at 9:00 pm. Network with peers and reflect on the day's insights and experiences."
		}
	]
};


export const thirdDayMex: IEventDay = {
	index: 2,
	title: '🤠 Sun',
	longTitle: 'Sunday March 3',
	date: new Date('2024-03-03T00:00:00-06:00'),
	events: [
		{
			"name": "Hacking Ends",
			"start": new Date("2024-03-03T09:00:00-06:00"),
			"duration": 0,
			"category": EventCategory.Default,
			"location": Location.Mexico,
			"description": "Wrap up your hacking session at 9:00 am. Finish your projects, and get ready for the final day's activities."
		},
		{
			"name": "Breakfast Fast",
			"start": new Date("2024-03-03T09:30:00-06:00"),
			"duration": 30,
			"category": EventCategory.Food,
			"location": Location.Mexico,
			"description": "Join the fast breakfast session at 9:30 am. Grab a quick bite to fuel up for the upcoming networking and presentation events."
		},
		{
			"name": "Networking Space",
			"start": new Date("2024-03-03T09:00:00-06:00"),
			"duration": 120,
			"category": EventCategory.Activity1,
			"location": Location.Mexico,
			"description": "Engage in networking activities from 9:00 am to 11:00 am. Connect with fellow participants, share ideas, and make lasting connections in the networking space."
		},
		{
			"name": "Presentations",
			"start": new Date("2024-03-03T11:00:00-06:00"),
			"duration": 90,
			"category": EventCategory.Default,
			"location": Location.Mexico,
			"description": "Attend the presentations session from 11:00 am to 12:30 pm. Witness the culmination of innovative projects and ideas from participants."
		},
		{
			"name": "Closing Ceremony",
			"start": new Date("2024-03-03T13:30:00-06:00"),
			"duration": 60,
			"category": EventCategory.Activity2,
			"location": Location.Mexico,
			"description": "Join the closing ceremony at 1:30 pm. Celebrate the achievements, acknowledge participants, and officially close the event."
		}
	]
};


export const  uOttaHack = {firstDay, secondDay, thirdDay};
export const  IHackTec = {firstDayMex, secondDayMex, thirdDayMex};


export const dayAfterLastDay = new Date('2024-03-04T00:00:00-06:00');
