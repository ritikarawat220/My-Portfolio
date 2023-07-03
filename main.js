const navSectionOne = document.querySelector('.info'); // container containing menu and nav links
const navSectionTwo = document.querySelector('.menu-icon'); // menu-icon
const links = document.querySelectorAll('.co'); // navigation class list
const sections = document.querySelectorAll('.sections'); // sections classlist
const windowPopup = document.querySelector('.window-popup');// container containiing the popup
const bodyButtons = document.querySelector('.all-container'); // general body contain
const PortfolioContainer = document.getElementById('portfolio'); // container for the cards

// display the popup menu bar
function menuTransition() {
  if (navSectionOne.classList.contains('phone')) {
    navSectionOne.classList.remove('phone');
  } else {
    navSectionOne.classList.add('phone');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}
// once click on the men-icon
navSectionTwo.addEventListener('click', menuTransition);

// hides the menu bar
function removeMenu() {
  if (navSectionOne.classList.contains('phone')) {
    navSectionOne.classList.remove('phone');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}

links.forEach((link) => {
  link.addEventListener('click', removeMenu);
});

// Email vaidation form
const emailE = document.querySelector('#email');
const form = document.querySelector('#forme');
const error = document.querySelector('#error');

function validator(emailAcquire) {
  if (emailAcquire.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

// Message validation
form.addEventListener('submit', (e) => {
  if (validator(emailE.value)) {
    error.textContent = '';
  } else {
    e.preventDefault();
    emailE.style.border = '4px solid red';
    error.style.display = 'flex';
    error.textContent = 'Error! Please Use Lowercase Email.';
  }
});

const contactForm = document.querySelector('#forme');
const userData = {
  name: '',
  email: '',
  message: '',
};

contactForm.addEventListener('change', () => {
  userData.name = document.querySelector('#name').value;
  userData.email = document.querySelector('#email').value;
  userData.message = document.querySelector('#message').value;

  localStorage.setItem('object', JSON.stringify(userData));
});

const dataOB = JSON.parse(localStorage.getItem('object'));
if (dataOB) {
  document.querySelector('#name').value = dataOB.name;
  document.querySelector('#email').value = dataOB.email;
  document.querySelector('#message').value = dataOB.message;
}

const cards = [
  {
    id: 'cardOne',
    title: 'Conference Page',
    education: ['COLLISION', '&nbsp; Front End Dev', '&nbsp; 2023'],
    description: 'This is an educational project to make a website for a web conference event with home page and about page.',
    technologies: ['html5', 'css', 'javascript', 'Figma'],
    image: {
      mainImg: './my-work/conference.png',
      counter: './portfolio/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'To-Do List',
    education: ['TO-DO LIST', '&nbsp; Back End Dev', '&nbsp; 2023'],
    description: '📝 This is a simple to do list app that lets you add your daily tasks into a list. You can add or remove or modify your task, and you can mark the tasks as complete and delete completed tasks.',
    technologies: ['html', 'css', 'javascript', 'Webpack'],
    image: {
      mainImg: './Screenshots/Screenshot (37).png',
      counter: './portfolio/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },

  {
    id: 'cardThree',
    title: 'MealDB',
    education: ['MealDB', '&nbsp; Back End Dev', '&nbsp; 2023'],
    description: "🍜 The MealDB is a web application that has a list of foods. The web application was built based on two APi's, which are the Meals DB and the Involvement API. The web app makes APi call to render a list of meals and also make another API call when a user likes or comment.",
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: './Screenshots/meal ss.png',
      counter: './portfolio/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardFour',
    title: 'World Metrics',
    education: ['World Metrics', '&nbsp; Back End Dev', '&nbsp; 2023'],
    description: ' 🌏 World Metrics is a single page web application that allows users to check world continents/countries information, e.g: Population, Flags, Currencies, Languages, capital, borders, area, etc.',
    technologies: ['html', 'css', 'javascript', 'react'],
    image: {
      mainImg: 'Screenshots/world-1.png',
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
    title: 'Conference Page',
    education: ['COLLISION', '&nbsp; Front End Dev', '&nbsp; 2023'],
    description: 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',

    technologies: ['html', 'css', 'javascript', 'Figma'],
    technologies2: ['github', 'VS Code', 'Bootstraps'],
    image: {
      mainImg: './my-work/conference.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://ritikarawat220.github.io/Capstone-project---Conference-page/',
      source: 'https://github.com/ritikarawat220/Capstone-project---Conference-page',
    },
  },

  {
    id: 'cardTwo',
    title: 'To-Do List',
    education: ['TO-DO LIST', '&nbsp; Back End Dev', '&nbsp; 2023'],
    description: '📝 This is a simple to do list app that lets you add your daily tasks into a list. You can add or remove or modify your task, and you can mark the tasks as complete and delete completed tasks.',

    technologies: ['html', 'css', 'javascript', 'Webpack'],
    technologies2: ['github', 'VS Code', 'Bootstraps'],
    image: {
      mainImg: 'Screenshots/ss-todo-list.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://ritikarawat220.github.io/To-Do-list/',
      source: 'https://github.com/ritikarawat220/To-Do-list',
    },
  },

  {
    id: 'cardThree',
    title: 'MealDB',
    education: ['MealDB', '&nbsp; Back End Dev', '&nbsp; 2023'],
    description: "🍜 The MealDB is a web application that has a list of foods. The web application was built based on two APi's, which are the Meals DB and the Involvement API. The web app makes APi call to render a list of meals and also make another API call when a user likes or comment.",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'VS Code', 'Bootstraps'],
    image: {
      mainImg: 'Screenshots/meal ss.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://ritikarawat220.github.io/JavaScriptCapstone/dist/',
      source: 'https://github.com/ritikarawat220/JavaScriptCapstone',
    },
  },

  {
    id: 'cardFour',
    title: 'World Metrics',
    education: ['World Metrics', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: ' 🌏 World Metrics is a single page web application that allows users to check world continents/countries information, e.g: Population, Flags, Currencies, Languages, capital, borders, area, etc.',

    technologies: ['html', 'css', 'javascript', 'react'],
    technologies2: ['github', 'Api', 'Bootstraps'],
    image: {
      mainImg: 'Screenshots/world2.png',
      counter: './portfolio/Counter.png',
      liveIcon: './portfolio/see-live.png',
      sourceIcon: './portfolio/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://metrics-webapp-xo2x.onrender.com/',
      source: 'https://github.com/ritikarawat220/ReactCapstone-project---Metrics-webapp',
    },
  },
];

// all of the HTML in that section is created when the page loads.
cards.forEach((object) => {
  PortfolioContainer.innerHTML += `<div class="card">
  <img class="img ${object.orderClas}" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
  <div class="sec-content">
  <h2 class="ton-del">
   ${object.title}
  </h2>
  <ul class="education">
  <li class="cano">
    ${object.education[0]}
  </li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
  </ul>
  <p>
    ${object.description}
  </p>
  <ul class="tech">
      <li>
        ${object.technologies[0]}
      </li>
      <li>
         ${object.technologies[1]}
      </li>
      <li>
         ${object.technologies[2]}
      </li>
      <li>
        ${object.technologies[3]}
      </li>
  </ul>
  <button data-id="${object.id}" class="button" type="button">
    ${object.button}
  </button>
  </div>
  </div>`;
});

// Add a popCard or remove popup card when going to see live or see source
function pageTransition() {
  if (windowPopup.classList.contains('pop-body')) {
    windowPopup.classList.remove('pop-body');
  } else {
    windowPopup.classList.add('pop-body');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}
// Removes the Popup on click close button and Navigate to see live and see source on click
windowPopup.addEventListener('click', (e) => {
  const buttonClass = e.target.classList.contains('seeButtons');
  if (buttonClass) {
    windowPopup.classList.remove('pop-body');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
});

// Loads the popup card on click
bodyButtons.addEventListener('click', (e) => {
  const buttonClass = e.target.getAttribute('data-id');
  popup.forEach((object) => {
    if (buttonClass === object.id) {
      windowPopup.innerHTML = `<div id="${object.id}" class="pop-up">
       <div class="pop-head">
         <h2 class="ton-del">
         ${object.title}
         </h2>
         <button type="button" class="cancel seeButtons">
           ${object.cancel}
         </button>
       </div>
       <ul class="education">
         <li class="cano">
           ${object.education[0]}
         </li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
       </ul>
       <div>
         <img class="pop-img" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
       <div>
         <div class="pop-bottom">
           <p class="pop-para">
             ${object.description}
           </p>
           <div class="sect-butns">
             <div>
               <ul class="tech javaht">
                 <li>
                     ${object.technologies[0]}
                 </li>
                 <li>
                     ${object.technologies[1]}
                 </li>
                 <li>
                     ${object.technologies[2]}
                 </li>
             </ul>
             <ul class="tech bootrap">
                 <li>
                     ${object.technologies2[0]}
                 </li>
                 <li>
                     ${object.technologies2[1]}
                 </li>
                 <li>
                     ${object.technologies2[2]}
                 </li>
             </ul>
             </div>
             <hr class="single-line">
             <nav class="pop-nav">
             <a class="navii1" href="${object.navigation.live}" target="_blank">
               <button class="pop-btn btn1 seeButtons" type="button">
               ${object.butn1}
                 <img class="seeButtons" src="${object.image.liveIcon}" alt="live-icon">
               </button>
             </a>
             <a class="navii2" href="${object.navigation.source}" target="_blank">
               <button class="pop-btn btn2 seeButtons"  type="button">
               ${object.butn2}
               <img class="seeButtons" src="${object.image.sourceIcon}" alt="github-icon">
               </button>
             </a>
             </nav>
           </div>
         </div>
       </div>
      </div>
     </div>`;
      pageTransition();
    }
  });
});