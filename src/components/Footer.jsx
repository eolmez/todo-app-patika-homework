const Footer = ({ todos, setTodos, filteredTodos, status, setStatus }) => {
  // Functions
  const clearCompleted = () => {
    setTodos(todos.filter((item) => !item.completed));
  };

  // Variables
  const todosLeft = filteredTodos.filter(
    (todo) => todo.completed === false
  ).length;

  const anyTodoCompleted = todos.some((todo) => todo.completed);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLeft} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <button
            onClick={() => {
              setStatus("all");
            }}
            className={status === "all" ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setStatus("active");
            }}
            className={status === "active" ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setStatus("completed");
            }}
            className={status === "completed" ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>
      {!anyTodoCompleted ? null : (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
