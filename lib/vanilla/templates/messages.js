const app = require('./app');
const message = require('./message');

const links = [{
  href: 'messages/jimmy',
  text: 'Conversation with Jimmy'
}, {
  href: 'messages/johnny',
  text: 'Conversation with Johnny'
}, {
  href: 'messages/jeff',
  text: 'Conversation with Jeff'
}];

function messageList() {
  return links.map(
    link => `<li><a href="#${link.href}">${link.text}</a></li>`
  ).join('');
}

function messages(resources) {
  return `
    <h2>
      Messages
    </h2>
    ${
      resources.length ?
      message(resources) :
      `<h3>
        Conversations
      </h3>
      <ul>
        ${messageList()}
      </ul>`

    }
  `;
}

function template(resources) {
  return `
    ${app(messages(resources))}
  `;
}

module.exports = template;
