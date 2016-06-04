const app = require('./templates/app');

const routes = {
  home: require('./templates/home'),
  messages: require('./templates/messages'),
  feed: require('./templates/feed'),
  profile: require('./templates/profile')
};

document.getElementById('app').innerHTML = app();

function renderer(route, resources) {
  const {nodeId, innerHTML} = routes[route](resources);
  const node = document.getElementById(nodeId);
  if (node) {
    node.innerHTML = '';
    node.innerHTML = innerHTML;
  } else {
    renderer(route);
    renderer(route, resources);
  }
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
