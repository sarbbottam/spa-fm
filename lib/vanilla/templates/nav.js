const links = [{
  href: 'home',
  text: 'Home'
}, {
  href: 'messages',
  text: 'Messages'
}, {
  href: 'feed',
  text: 'Feed'
}, {
  href: 'profile',
  text: 'Profile'
}];

function navs() {
  return links.map(
    link => `<li><a href="#${link.href}">${link.text}</a></li>`
  ).join('');
}

function template() {
  return `
    <nav>
      <ul>
        ${navs()}
      </ul>
    </nav>
  `;
}

module.exports = template;
