import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  console.log(response.data);
  const todo: Todo = response.data;
  const ID = todo.id;
  const title = todo.itle;
  const completed = todo.completed;

  console.log(`
  The to with id ${ID} is completed? ${completed}}`);
});
