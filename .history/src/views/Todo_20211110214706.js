const Todo = (props) => {
  // properties
  // parent => child , top => bottom
  // const todos = props.todos; // prop từ cha xuống con
  const { todos, title } = props;

  const handleDelete = (id) => {
    alert("delete todos");
  };
  return (
    <ul className="todo-container">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title} <span onClick={(id) => handleDelete()}>x</span>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Todo;
