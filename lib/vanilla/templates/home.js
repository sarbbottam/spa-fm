const app = require('./app');

function home() {
  return `
    <h2>
      Home
    </h2>
  `;
}

function template() {
  return `
    ${app(home())}
  `;
}

module.exports = template;
