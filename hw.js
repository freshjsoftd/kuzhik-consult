// HW SimpleNumbers
/* SimpleNumbers: for (let i = 2; i <= 100; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue SimpleNumbers;
	}
	console.log(i);
} */

// Father 2-fold than son

/* const age2Fold = (sonAge, fatherAge) => {
	let count = 0;
	if (fatherAge - sonAge <= 15 || fatherAge < 0) {
		return 'You entered wrong info';
	}
	if (fatherAge / sonAge === 2) {
		return count;
	}
	if (fatherAge / sonAge > 2) {
		while (fatherAge / sonAge !== 2) {
			fatherAge++;
			sonAge++;
			count++;
		}
		return count;
	}
	while (fatherAge / sonAge < 2) {
		fatherAge--;
		sonAge--;
		count--;
	}
  return count;
}; 

console.log(age2Fold(25, 48));*/

// Palindrom

const checkPalindrom = (str) => {
	const sep = ''
	const strWithoutGap = str.toLowerCase().replace(/ /g, sep);
	const reverseStr = strWithoutGap.split(sep).reverse().join(sep);
	// console.log(strWithoutGap);
	// console.log(reverseStr);
	return reverseStr === strWithoutGap;
}

console.log(checkPalindrom('Аргентина манит негра'));
console.log(checkPalindrom('Казак'));
