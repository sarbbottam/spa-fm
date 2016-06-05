const nav = require('./nav');

function template() {
  return `
    <h1>Social Network Lite</h1>
    ${nav()}
    <div id="outlet"></div>
  `;
}

module.exports = template;
