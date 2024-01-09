const nav = document.getElementById('nav1');
const tag = document.getElementsByTagName('li');
const selector = document.querySelector('li');

const article = document.createElement('article')

article.textContent = 'Number 10'

console.log(nav);
console.log(tag);
console.log(selector);

nav.append(selector);
nav.append(article);

const promise = new Promise((resolve, reject) => {
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



console.log(promise);

