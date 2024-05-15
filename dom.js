const container = document.getElementById('container')
console.log('parent',container.parentElement)
console.log('nextSibling',container.nextElementSibling);
console.log('previousSibling',container.previousElementSibling);
console.log('children',container.children);
console.log('firstChild',container.firstElementChild);
console.log('lastChild',container.lastElementChild);


const html = document.documentElement;
console.log({html});
console.log('body',document.body);