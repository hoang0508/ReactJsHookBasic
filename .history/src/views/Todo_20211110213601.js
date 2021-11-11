const Todo = (props) => {
  // properties
  // parent => child , top => bottom
  const todos = props.todos; // prop từ cha xuống con
  return (
    <ul className="todo-container">
      <div className="title">{props.title}</div>
      {todos.map((todo) => {
        return (
          <div>
            <li className="todo-child" key={todo.id}>
              {todo.title}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Todo;
