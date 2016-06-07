const {renderer, routes} = require('../renderer');

function router(e) {
  const target = e && e.target;
  if (target && target.tagName.toLowerCase() === 'a') {
    e.preventDefault();
    e.stopPropagation();
    const href = target.getAttribute('href').substr(1);
    window.history.pushState({}, '', window.location.pathname.replace(/\/.*/, `/${href}`));
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
