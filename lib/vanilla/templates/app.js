const nav = require('./nav');

function template(child) {
  return `
    <h1>Social Network Lite</h1>
    ${nav()}
    ${child}
  `;
}

module.exports = template;
