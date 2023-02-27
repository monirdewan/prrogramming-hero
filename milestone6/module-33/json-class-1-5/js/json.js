const user = {
    name: "Monir Dewan",
    address: "Hotatia dewan bari",
    id: 10,
    designation:'Doctor'
}
//console.log(user);

const stringifyObj = JSON.stringify(user);

//console.log(stringifyObj);
const mainobj = JSON.parse(stringifyObj);
console.log(mainobj);