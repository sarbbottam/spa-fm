const {renderer, routes} = require('../renderer');

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
