import React, { useRef, useContext } from "react";
import { AppContext } from "./App";

function AddItem() {
  let inputRef = useRef(null);
  const { todo, setTodo } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = {
      todo: "" + inputRef.current.value,
      status: "Active",
    };
    setTodo([...todo, newValue]);
    inputRef.current.value = "";

    // set local storage
    localStorage.setItem('myTodoList', JSON.stringify([...todo, newValue]));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="add-items d-flex">
        <input
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          ref={inputRef}
        />
        <button
          type="submit"
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddItem;
