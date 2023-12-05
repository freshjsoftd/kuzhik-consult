let user = {
	fullName: null,
	age: 20,
	isMarried: true,
};

const array = [1, 2];

function sum(a, b) {
	return a + b;
}
console.log(user);
/* console.log(typeof user.age)
console.log(typeof user.fullName);
console.log(typeof user.isMarried);
console.log(typeof null);
console.log(typeof sum);
console.log(typeof array); */

/* if (typeof user.fullName === 'string') {
	console.log('It is a string');
} else if (typeof user.fullName === 'number') {
	console.log('It is a number');
} else if (typeof user.fullName === 'boolean') {
	console.log('It is a boolean');
} */

const key = typeof user.fullName;

switch (key) {
	case 'string':
		console.log('It is a string');
		break;
	case 'number':
		console.log('It is a number');
		break;
	case 'boolean':
		console.log('It is a boolean');
		break;
  default: console.log('I dont know');
}