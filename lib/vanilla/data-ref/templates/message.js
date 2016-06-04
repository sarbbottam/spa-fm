const messagesHash = {
  jimmy: {
    name: 'Jimmy',
    messages: [
      'This is a message content',
      'This is a message content',
      'This is a message content'
    ]
  },
  johnny: {
    name: 'Johnny',
    messages: [
      'This is a message content',
      'This is a message content',
      'This is a message content'
    ]
  },
  jeff: {
    name: 'Jeff',
    messages: [
      'This is a message content',
      'This is a message content',
      'This is a message content'
    ]
  }
};

function list(messages) {
  return messages.map(
    message => `<li>${message}</li>`
  ).join('');
}

function message(sender) {
  return `
    <h3>
      Thread with ${messagesHash[sender].name}
    </h3>
    <a href="#" data-ref="#messages">Back to message list.</a>
    <ul>
      ${list(messagesHash[sender].messages)}
    </ul>
  `;
}

function template(resources) {
  return message(resources[0]);
}

module.exports = template;
