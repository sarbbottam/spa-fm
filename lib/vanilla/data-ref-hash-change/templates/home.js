function home() {
  return `
    <h2>
      Home
    </h2>
  `;
}

function template() {
  return {
    nodeId: 'outlet',
    innerHTML: `
      ${home()}
    `
  };
}

module.exports = template;
