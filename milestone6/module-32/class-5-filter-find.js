//add a logic in filter function filter gives you you all result that match your condition
const numbers1 = [12,5,23,45,11,9,55,61,1];
const bigNumber = numbers1.filter(number => number > 20);
// console.log(bigNumber)
 

//second Example
const products1 = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:35000},
    {id:4, name:'tablet', price:23000},
]

const productPrice = products1.filter(product =>product.price >40000);
// console.log(productPrice);


//find gives you only one Result that   match your condition
const fiveNumbers = numbers1.find(num => num%5===0);
const twoNumber = numbers1.find(num => num%2===0);
// console.log(fiveNumbers);
// console.log(twoNumber);