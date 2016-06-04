const routes = {
  home: require('./templates/home'),
  messages: require('./templates/messages'),
  feed: require('./templates/feed'),
  profile: require('./templates/profile')
};

const appNode = document.getElementById('app');

function renderer(route, resources) {
  appNode.innerHTML = '';
  appNode.innerHTML = routes[route](resources);
}

function router() {
  const hash = window.location.hash.substr(1);
  const resources = hash.split('/');
  const route = resources.shift();
  if (route && routes[route]) {
    renderer(route, resources);
  } else {
    window.location.hash = 'home';
  }
}

window.addEventListener('hashchange', router);

router();
