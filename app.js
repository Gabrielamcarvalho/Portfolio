const landingPages = [
  {
    name: 'Yo.Design',
    img: './images/Yodesign.jpg',
    liveLink: 'https://yodesign.netlify.app/',
    code: 'https://github.com/Gabrielamcarvalho/YOdesign',
  },
  {
    name: 'Mountairs',
    img: './images/Mountairs.jpg',
    liveLink: 'https://mountairs.netlify.app/',
    code: 'https://github.com/Gabrielamcarvalho/Mountairs',
  },
  {
    name: 'Dunder Mifflin',
    img: './images/dunder.jpg',
    liveLink: 'https://gabrielamcarvalho.github.io/DunderMifflin/index.html',
    code: 'https://github.com/Gabrielamcarvalho/DunderMifflin',
  },
];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const landingPageName = document.querySelector('.landing-page--name');
const landingPageImg = document.querySelector('.landing-page--src');
const landingPageLive = document.querySelector('.btn--view-live');
const landingPageCode = document.querySelector('.btn--view-code');

let currentLandingPage = 0;

const displayLandingPage = () => {
  landingPageName.textContent = `${landingPages[currentLandingPage].name} - Responsive Landing Page `;
  landingPageImg.src = landingPages[currentLandingPage].img;
  landingPageLive.href = landingPages[currentLandingPage].liveLink;
  landingPageCode.href = landingPages[currentLandingPage].code;
};

displayLandingPage();

prevBtn.addEventListener('click', () => {
  currentLandingPage--;

  if (currentLandingPage < 0) currentLandingPage = landingPages.length - 1;

  console.log(currentLandingPage);
  displayLandingPage();
});

nextBtn.addEventListener('click', () => {
  currentLandingPage++;

  if (currentLandingPage > landingPages.length - 1) currentLandingPage = 0;

  console.log(currentLandingPage);
  displayLandingPage();
});
