const app = require('./templates/app');

const routes = {
  home: require('./templates/home'),
  messages: require('./templates/messages'),
  feed: require('./templates/feed'),
  profile: require('./templates/profile')
};

document.getElementById('app').innerHTML = app();

let node;
function renderer(route, resources) {
  if (node) {
    node.removeAttribute('tabindex');
  }
  const {nodeId, innerHTML} = routes[route](resources);
  node = document.getElementById(nodeId);
  if (node) {
    node.setAttribute('tabindex', '-1');
    node.innerHTML = '';
    node.innerHTML = innerHTML;
    node.focus();
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
