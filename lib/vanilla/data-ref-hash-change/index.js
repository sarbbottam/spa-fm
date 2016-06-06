const app = require('../templates/app');

const routes = {
  home: require('../templates/home'),
  messages: require('../templates/messages'),
  feed: require('../templates/feed'),
  profile: require('../templates/profile')
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

function router(e) {
  const target = e && e.target;
  if (target && target.tagName.toLowerCase() === 'a') {
    e.preventDefault();
    e.stopPropagation();
    let href = target.getAttribute('href');
    window.location.hash = href;
    href = href.substr(1);
    const resources = href.split('/');
    const route = resources.shift();
    if (route && routes[route]) {
      renderer(route, resources);
    } else {
      renderer('home');
    }
  } else {
    renderer('home');
  }
}

document.addEventListener('click', router);

router();
