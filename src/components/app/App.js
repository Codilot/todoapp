import React, { useState } from "react";
import "./App.css";
import List from "../list/List";
import ListItem from "../list-item/ListItem";
import Input from "../input/Input";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "",
      isCompleted: false
    }
  ]);

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i].focus();
    }, 0);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoStatus(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <form>
        <List>
          {todos.length === 0 && (
            <ListItem showCheckbox={todos.length > 0}>
              <Input
                type="text"
                onKeyDown={e => createTodoAtIndex(e, 0)}
                onChangeHandler={e => updateTodoAtIndex(e, 0)}
                placeholder="add new todo"
                value={todos.length > 0 ? todos[0].content : ""}
              />
            </ListItem>
          )}
          {todos.length > 0 &&
            todos.map((item, index) => (
              <ListItem
                index={index}
                key={index + item.content}
                completed={item.isCompleted}
                checkboxHandler={() => toggleTodoStatus(index)}
              >
                <Input
                  type="text"
                  onKeyDown={e => handleKeyDown(e, index)}
                  onChangeHandler={e => updateTodoAtIndex(e, index)}
                  placeholder="add new todo"
                  value={item.content}
                />
              </ListItem>
            ))}
        </List>
      </form>
    </div>
  );
}

export default App;
