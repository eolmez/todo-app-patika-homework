const Todo = ({ todo, todos, setTodos }) => {
  // Functions
  const destroyHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={completedHandler}
            checked={todo.completed}
          />
          <label>{todo.text}</label>
          <button onClick={destroyHandler} className="destroy"></button>
        </div>
      </li>
    </>
  );
};

export default Todo;
