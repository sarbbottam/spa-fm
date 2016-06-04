const links = [{
  'data-ref': 'home',
  'text': 'Home'
}, {
  'data-ref': 'messages',
  'text': 'Messages'
}, {
  'data-ref': 'feed',
  'text': 'Feed'
}, {
  'data-ref': 'profile',
  'text': 'Profile'
}];

function navs() {
  return links.map(
    link => `<li><a href="#" data-ref="#${link['data-ref']}">${link.text}</a></li>`
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
