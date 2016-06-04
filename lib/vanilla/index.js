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

function router() {
  const route = window.location.hash.substr(1);
  if (route && routes[route]) {
    renderer(route);
  } else {
    window.location.hash = 'home';
  }
}

window.addEventListener('hashchange', router);

router();
