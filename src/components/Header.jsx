const Header = ({ inputText, setInputText, todos, setTodos }) => {
  // Functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitEventHandler = (e) => {
    e.preventDefault();
    if (/^\s/.test(inputText) || !inputText) {
      return false;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    // console.log(todos);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitEventHandler}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
