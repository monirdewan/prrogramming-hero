function loadPosts(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayPosts(data))
}


function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
       const div = document.createElement('div');
       div.innerHTML = `
          <h4>User : ${post.id}</h4>
          <h5>Post title : ${post.title}</h5>
          <p>Post descreaption : ${post.body}</p>
       
       `
       postContainer.appendChild(div);
    }
}


loadPosts()


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





