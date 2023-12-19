// Finction

/* let a = 30;
let b = 20;

let c = a + b;
*/

let c = summ(10, 5);

function summ(a, b) {
	return a + b;
	// console.log()
}

console.log(c);

const add = function (a, b) {
	return a + b;
};
let d = add(20, 40);

console.log(d);

// Arrow Function

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const minus = (a, b) => {

  let c = 200;
  return a - b + c;
};

const show = (a) => console.log('Show smth ' + a);

let m = minus(100, 20);

console.log(m);

show('string', 'hello');

{
  let localD = 500;
  console.log(localD);
}







