/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// function falaoi() {
//     return 'Oi';
// }

// let vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaoi())

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);