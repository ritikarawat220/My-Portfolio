const hamburger = document.querySelector('.hamburger'); //container containing menu and nav links
const openMenu = document.querySelector('.mobile-option'); //menu icon
const extBtn = document.querySelector('.exit'); //exit button
const links = document.querySelectorAll('.co'); // navigation class list
const sections = document.querySelectorAll('.sections'); // sections classlist
const windowPopup = document.querySelector('.window-popup');// container containiing the popup
const bodyButtons = document.querySelector('.all-container'); // general body contain
const PortfolioContainer = document.getElementById('portfolio'); // container for the cards

function show() {
  openMenu.style.display = 'block';
  openMenu.classList.toggle('open');
  hamburger.style.visibility = 'hidden';
  extBtn.style.visibility = 'visible';
}

function close() {
  openMenu.style.display = 'none';
  openMenu.classList.remove('open');
  hamburger.style.visibility = 'visible';
  extBtn.style.visibility = 'hidden';
}

hamburger.addEventListener('click', show);
extBtn.addEventListener('click', close);

openMenu.addEventListener('click', close);

const cards = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html5', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio/Nature.png',
      counter: './portfolio/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio/profes...png',
      counter: './Portfolio/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio/Snapshoot Portfolio.png',
      counter: './portfolio/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardFour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio/availa.png',
      counter: './portfolio/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },
];

// For each project you need to store the following pieces of data in a
// JavaScript object, at a minimum: name, description, featured image,
// technologies, link to live version, link to source
// All popup Cards
const popup = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser',

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'portfolio/Nature.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://github.com/ritikarawat220/My-Portfolio//',
      source: 'https://github.com/ritikarawat220/My-Portfolio.git/',
    },
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'portfolio/profes...png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://github.com/ritikarawat220/My-Portfolio//',
      source: 'https://github.com/ritikarawat220/My-Portfolio.git/',
    },
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'portfolio/Snapshoot Portfolio.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://github.com/ritikarawat220/My-Portfolio//',
      source: 'https://github.com/ritikarawat220/My-Portfolio.git/',
    },
  },

  {
    id: 'cardFour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'portfolio/availa.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://github.com/ritikarawat220/My-Portfolio//',
      source: 'https://github.com/ritikarawat220/My-Portfolio.git/',
    },
  },
];
