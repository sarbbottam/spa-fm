const lists = [
  'This is a feed item.',
  'This is a feed item.',
  'This is a feed item.'
];

function feeds() {
  return lists.map(
    list => `<li>${list}</li>`
  ).join('');
}

function feed() {
  return `
    <h2>
      Feed
    </h2>
    ${feeds()}
  `;
}

function template() {
  return {
    nodeId: 'outlet',
    innerHTML: `
      ${feed()}
    `
  };
}

module.exports = template;
