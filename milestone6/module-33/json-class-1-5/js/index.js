function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data));
}

function displayUser2(data){
    //example 1

//    for(user of data){
//     // console.log(user.name)
//     // console.log(user.email)
//     const name = user.name;
//     const email = user.email;
//     console.log(`${name}  :  ${email}`)
//    }

//Example 2
  const ul = document.getElementById('user-list');
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = user.name+" :==== "+ user.email;
    ul.appendChild(li);
  }
}


function creatAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST',
 body: JSON.stringify({
   title: 'foo',
   body: 'bar',
   userId: 1,
 }),
 headers: {
   'Content-type': 'application/json; charset=UTF-8',
 },
})
 .then((response) => response.json())
 .then((json) => console.log(json));
}

function deletePost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'DELETE',
});
}


function patchAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PATCH',
 body: JSON.stringify({
   title: 'foo',
 }),
 headers: {
   'Content-type': 'application/json; charset=UTF-8',
 },
})
 .then((response) => response.json())
 .then((json) => console.log(json));
}