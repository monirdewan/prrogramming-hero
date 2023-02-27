
//when you want to return some thing then you use map you Can make function in this map; 
const numbers = [12,56,87,44];
const half = numbers.map(n => n/2);
//console.log(half);
const friends = ['Tom Hanks', 'Tom Brady','Tom Cruse' ,'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0] );
// console.log(firstLetters);

const nameLangth = friends.map(friend => friend.length);
//console.log(nameLangth)

const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:35000},
    {id:4, name:'tablet', price:23000},
]

//const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
// console.log(items)

//if You don't need return you can use forEach
//friends.forEach(friend => console.log(friend));