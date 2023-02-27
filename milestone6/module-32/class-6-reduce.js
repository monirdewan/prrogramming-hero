const numbers3 = [1,2,3,4,5];
//.reduce (accumulatorFunction, initial value);
//accumulatorFunction has two parameter
const total = numbers3.reduce((previous, current)=>previous+current,0);
//console.log(total);



//Example 2
const total1 = numbers3.reduce(
    (previous, current)=>{
        console.log(previous,current)
        return previous+current
    },
    0)

    console.log(total1);