import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return [
      ...state,
      {
        id: Date.now(),
        text: action.payload
      }
    ];
  }

  if (action.type === "DELETE_TODO") {
    return state.filter((todo) => todo.id !== action.payload);
  }

  return state;
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: input
    });

    setInput("");
  };

  return (
    <div>
        <hr /><hr />
      <h2>Todo App</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddTodo}>
        Add
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TODO",
                payload: todo.id
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;