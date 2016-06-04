const app = require('./app');

const person = {
  name: 'John Doe',
  title: 'John Doe is a developer at BigCo',
  company: 'BigCo',
  details: [
    'this is a detail about John Doe',
    'this is a detail about John Doe',
    'this is a detail about John Doe'
  ],
  edudation: 'John Doe is well educated.',
  skills: 'John Doe has no skills.'
};

function summary() {
  return person.details.map(
    detail => `<li>${detail}</li>`
  ).join('');
}

function profile() {
  return `
    <h2>
      ${person.name}
    </h2>
    <h3>Summary</h3>
    <ul>
      ${summary()}
    </ul>
    <h3>Education</h3>
    ${person.edudation}
    <h3>Skills</h3>
    ${person.skills}
    </ul>
  `;
}

function template() {
  return `
    ${app(profile())}
  `;
}

module.exports = template;
