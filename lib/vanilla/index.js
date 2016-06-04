const routes = {
  home: require('./templates/home'),
  feed: require('./templates/feed'),
  profile: require('./templates/profile')
};

const appNode = document.getElementById('app');

function renderer(route) {
  appNode.innerHTML = '';
  appNode.innerHTML = routes[route]();
}

function hashchangeHandler() {
  const route = window.location.hash.substr(1);
  renderer(route);
}

window.addEventListener('hashchange', hashchangeHandler);

window.location.hash = 'home';
