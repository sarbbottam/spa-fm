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
  if (resources && resources.length) {
    return {
      nodeId: 'outlet-message',
      innerHTML: message(resources)
    };
  }
  return {
    nodeId: 'outlet',
    innerHTML: `
    <h2>
      Messages
    </h2>
    <div id="outlet-message">
      <h3>
        Conversations
      </h3>
      <ul>
        ${messageList()}
      </ul>
    </div>`
  };
}

function template(resources) {
  return messages(resources);
}

module.exports = template;
