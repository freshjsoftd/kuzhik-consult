// HW SimpleNumbers
/* SimpleNumbers: for (let i = 2; i <= 100; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue SimpleNumbers;
	}
	console.log(i);
} */

// Father 2-fold than son

const age2Fold = (sonAge, fatherAge) => {
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

console.log(age2Fold(25, 48));
