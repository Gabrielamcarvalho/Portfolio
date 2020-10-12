const projectsContainer = document.querySelector('projects-container');
const app = document.querySelectorAll('.app');
const landingPage = document.querySelectorAll('.landingPage');
const games = document.querySelectorAll('.game');

const changeCategory = () => {
  if (document.getElementById('apps').selected) {
    app.forEach((a) => {
      a.classList.remove('hidden');
      a.classList.add('show');
    });
    landingPage.forEach((l) => {
      l.classList.remove('show');
      l.classList.add('hidden');
    });
    games.forEach((g) => {
      g.classList.remove('show');
      g.classList.add('hidden');
    });

    console.log('apps');
  } else if (document.getElementById('landing-pages').selected) {
    app.forEach((a) => {
      a.classList.remove('show');
      a.classList.add('hidden');
    });
    landingPage.forEach((l) => {
      l.classList.remove('hidden');
      l.classList.add('show');
    });
    games.forEach((g) => {
      g.classList.remove('show');
      g.classList.add('hidden');
    });

    console.log('landing page');
  } else if (document.getElementById('games').selected) {
    app.forEach((a) => {
      a.classList.remove('show');
      a.classList.add('hidden');
    });
    landingPage.forEach((l) => {
      l.classList.remove('show');
      l.classList.add('hidden');
    });
    games.forEach((g) => {
      g.classList.remove('hidden');
      g.classList.add('show');
    });
    console.log('games');
  } else {
    app.forEach((a) => {
      a.classList.remove('hidden');
      a.classList.add('show');
    });
    landingPage.forEach((l) => {
      l.classList.remove('hidden');
      l.classList.add('show');
    });
    games.forEach((g) => {
      g.classList.remove('hidden');
      g.classList.add('show');
    });
  }
};
