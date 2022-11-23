localStorage.setItem('data', JSON.stringify(15));
const a = JSON.parse(localStorage.getItem('data'));
console.log(a);
console.log(typeof a);

const b = [1, 2, 3, 4, 5, 6];
localStorage.setItem('data_b', JSON.stringify(b));
const c = JSON.parse(localStorage.getItem('data_b'));
console.log(c);
console.log(typeof c);
