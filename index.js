let user = {
	fullName: 'Jhon',
	age: 20,
	isMarried: true,
	go: function(){
		console.log(`${this.fullName} is running`)
	}
};


user.go()
const array = [1, 2, 3, 5];

console.log(array[3])

/* 

function sum(a, b) {
	return a + b;
} */
// console.log(user);
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

/* const key = 3;

switch (key) {
	case 0:
		console.log('Level0');
		break;
	case 1:
		console.log('Level1');
		break;
	case 2:
		console.log('Level2');
		break;
	case 3:
		console.log('Level3');
		break;
	case 4:
		console.log('Level4');
		break;
	case 5:
		console.log('Level5');
		break;
	case 6:
		console.log('Level6');
		break;
	case 7:
		console.log('Level7');
		break;
  default: console.log('I dont know');
} */

// key === 'string' ? console.log('It is a string') : console.log('It is not a string');

// Loop
// let i = 1;
/* while(count < 10){
	console.log('Count = ', count)
	count++;
} */

/* do {
	console.log('Count = ', count);
	count++;
} while (count < 10); */


/* for(; i < 10; i++){
	let sq = i ** 2;
	if(i === 5) continue;
	console.log('Sq = ', sq);
	if(i === 7) break;
} */


