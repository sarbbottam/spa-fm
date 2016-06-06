const {renderer, routes} = require('../renderer');

function router(e) {
  const target = e && e.target;
  if (target && target.tagName.toLowerCase() === 'a') {
    e.preventDefault();
    e.stopPropagation();
    let href = target.getAttribute('href');
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
