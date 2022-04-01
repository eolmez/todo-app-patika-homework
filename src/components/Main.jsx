import React, { useState } from "react";
import Todo from "./Todo";

const Main = ({ todos, setTodos, filteredTodos }) => {
  // States
  const [clickHandler, setClickHandler] = useState(true);

  // Functions
  const allCompletedHandler = () => {
    // console.log("ta-daaa", clickHandler);
    setTodos(
      todos.map((item) => {
        return { ...item, completed: clickHandler };
      })
    );
    setClickHandler(!clickHandler);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={!clickHandler} />
      <label onClick={allCompletedHandler} htmlFor="toggle-all">
        Mark all as complete
      </label>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </section>
  );
};

export default Main;
