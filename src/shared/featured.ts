import { LisbonTrip, Workmicasa, ScreenShot, Weather } from '@static/images';

export const featured: {
  id: string;
  name: string;
  info?: string;
  code?: string;
  live?: string;
  image?: string;
}[] = [
  {
    id: 'screenshot',
    name: 'Minuscode Screenshot',
    info: 'A prototype screenshot portfolio idea for minuscode. You can scrape images from websites using an array, it will give you diferent viewports. Site deployed using Netlify.',
    code: 'https://bitbucket.org/minuscode/workspace/repositories',
    live: 'https://minuscodeproject.netlify.app/',
    image: ScreenShot,
  },
  {
    id: 'weather',
    name: 'Weather App',
    info: 'This project involved the integral construction and design of a minimalistic weatherapp. The page is built in node.js and deployed using Heroku.  Additionally, I added basic integration tests using cypress.',
    code: 'https://github.com/Festevestrindade/weatherapp',
    live: 'https://thisisawetherapp.herokuapp.com/',
    image: Weather,
  },
  {
    id: 'lisbontrip',
    name: 'Lisbon Trip',
    info: 'I have lost count of the number of times I have been asked for recommendations on what to do on a trip to Lisbon, my hometown. So I decided to combine my passion for my city with my design and programming skills and created this recommendation website. Looking for a restaurant, a bar or a tourist attraction? Let me show you around.',
    code: 'https://github.com/Festevestrindade/Lisbon_trip',
    live: 'https://lisbontrippin.netlify.app/',
    image: LisbonTrip,
  },
  {
    id: 'workmicasa',
    name: 'Workmicasa',
    info: 'As my final dissertation of my degree, I designed a mobile application to call any kind of domestic services. Do you need a gardener, a cleaner or a babysitter? This application was designed for optimal user usability using Adobe XD, Photoshop and Illustrator.',
    code: 'https://github.com/Festevestrindade/workmicasa',
    live: 'https://festevestrindade.github.io/workmicasa/',
    image: Workmicasa,
  },
  {
    id: 'timeberlandNews',
    name: 'Timerberland Newsletter',
    info: 'I had the opportunity to work for Timberland Portugal newsletter for a few months. It was a great experience that introduced me to the world of freelancers.',
    code: 'https://github.com/Festevestrindade/brooklyn',
  },
  {
    id: 'eductradeBangla',
    name: 'Eductrade Bangladesh',
    info: 'I collaborated with a team of MBA students in a final master project on the internationalization of the company Eductrade in Bangladesh. My contribution to the project was the automation of the translation of the website into Bengali along with the design of the logos and collaborative merchandising.',
    code: 'https://github.com/Festevestrindade/eductrade',
    live: 'https://eductrade.netlify.app/',
  },
  {
    id: 'skyproNews',
    name: 'Skypro Newsletter',
    info: 'I had the pleasure of working with Skypro on the design and implementation of their Newsletter.',
    code: 'https://github.com/Festevestrindade/skypro-newsletter',
  },
];
