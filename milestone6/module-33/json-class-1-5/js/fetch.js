fetch('https://jsonplaceholder.typicode.com/todos/1')
      //.then(response =>console.log(response))
      .then(response => response.json())
      //.then(json => console.log(json))