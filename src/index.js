const {initialize} = require('./DomFuncs.js');
const {css} = require('./styles.css');

const hmf = initialize();
const header = hmf[0];
const main = hmf[1];
const footer = hmf[2];

document.body.append(header, main, footer);
