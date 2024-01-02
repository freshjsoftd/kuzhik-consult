// 'use strict';

class Transport {
    constructor(type){
        this.type = type;
    }
}

class Vehicle extends Transport {

    constructor(type){
        super(type);
    }

    drive(){
        console.log('I just drive to anywhere')
    }
}

class Plain extends Transport {
	constructor(type) {
		super(type);
	}
}
class Ship extends Transport {
	constructor(type) {
		super(type);
	}
}
class Train extends Transport {
	constructor(type) {
		super(type);
	}
}

class Bike extends Vehicle {
    
}
class Car extends Vehicle {
    constructor(type, brand, model, price, engineVolume){
        super(type)
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.engineVolume = engineVolume
    }
}

const opel = new Car('car', 'Opel', 'Astra', 20000, 1.5)

console.log(opel.model)
console.log(opel.price);



// RegExp

const reg = /astr/ig;

// const regclass = new RegExp('abc');

// const match = reg.test(opel.model);

console.log(reg.test(opel.model));