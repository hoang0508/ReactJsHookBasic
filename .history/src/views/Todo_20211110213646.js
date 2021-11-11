const Todo = (props) => {
  // properties
  // parent => child , top => bottom
  const todos = props.todos; // prop từ cha xuống con
  return (
    <ul className="todo-container">
      <div className="title">{props.title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">{todo.title}</li>
            <span>x</span>
          </div>
        );
      })}
    </ul>
  );
};

export default Todo;
