let fruits = ['Mango','Banana','Orange'];

let arr = new Array(20,30)

console.log({fruits})
console.log({arr})

// replace banana to 2
fruits[1] = 2;
console.log({fruits});

// find the last index use fruits.slice(-1)
// console.log('several items'), fruit.slice(0,4)
console.log('last item', fruits.slice(-1));

// .push to add item at end of array
let addLast = fruits.push('Apple');
console.log({fruits})

// unshift add at start
let addStart = fruits.unshift('Pineapple');
console.log({fruits});

// pop removes last item
let removeLast = fruits.pop();
console.log({fruits});

// shift removes the first item
let removeFirst = fruits.shift();
console.log({fruits});


// add array
let newFruits = fruits.push(('Tomato','Pearl'));
console.log((fruits))

// using the numbers inside an array find the sum of all items
let items = [20,30,40,50,60];
let add = items.reduce((acc, cur)=> acc + cur)
console.log({add});


// given an array of num multiply each item in the array by 2
// map
let multiply =  items.map(item=> item * 2)
// console.log({multiply})'Tomato','Pearl'


// given an array of numbers return an array with each element multiplied by itself
let square = []
let total = 0;
items.forEach(item => {;
    const multiple = item * item;
    console.log(multiple);
    square.push(multiple);
    total += items
});
console.log({square});
console.log({total});

// Destructuring

let [num1,num2,num3, ...rest] = items
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});