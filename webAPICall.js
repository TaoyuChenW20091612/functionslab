fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((todo, index) => {
      console.log(todo.title);
    });
  })
  .catch(function (err) {
    console.log(err);
  });
