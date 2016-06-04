const home = require('./templates/home');

const appNode = document.getElementById('app');
appNode.innerHTML = '';
appNode.innerHTML = home();
