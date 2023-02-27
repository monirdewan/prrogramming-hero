const loadUser = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(user => user.json())
    .then(data => displayUser(data))
}
const displayUser = user =>{
    const gender = document.getElementById('gender');
    const fullName = document.getElementById('name');
    gender.innerHTML=user.results[0].gender;
    const title = user.results[0].name.title;
    const first = user.results[0].name.first;
    const last = user.results[0].name.last;
    const name = `${title}  ${first}  ${last}`;
    fullName.innerHTML = name;
   console.log(user.results[0].name)
}
loadUser()