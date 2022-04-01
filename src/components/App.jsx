/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./../App.css";

const App = () => {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Effexts
  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    // console.log("effect")
    filterHandler();
    saveTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <section className="todoapp">
      <Header
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />

      {todos.length === 0 ? null : (
        <>
          <Main
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            status={status}
            setStatus={setStatus}
          />
          <Footer
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            status={status}
            setStatus={setStatus}
          />
        </>
      )}
    </section>
  );
};

export default App;
