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

module.exports = {
  renderer,
  routes
};
