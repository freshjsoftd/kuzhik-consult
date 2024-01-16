/* const nav = document.getElementById('nav1');
const tag = document.getElementsByTagName('li');
const selector = document.querySelector('li');

const article = document.createElement('article')

article.textContent = 'Number 10'

console.log(nav);
console.log(tag);
console.log(selector);

nav.append(selector);
nav.append(article); */

/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Is done'), 2000)
})
.then((done) => {
    console.log(done)
    return `${done} add smth else`
})
.catch((err) => {
    console.log(err)
    return err;
})
console.log(promise); */

// async/await

async function summ(a, b) {
	try {
		const result = a + b;
		const value = await Promise.resolve(result + ' $');
		console.dir(value);
		const final = (await value) + ' end';
		console.log(final);
		return final;
	} catch (error) {
		console.log(error);
	} finally {
		console.log('This code will run anyway');
	}
}
summ(10, 20);

// AJAX

const getUsers = async () => {
	try {
		const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
		console.log(data);
		const users = data.json();
		console.log(users);
		return users;
	} catch (error) {
		console.log(error);
	}
};

getUsers();

// Weather

