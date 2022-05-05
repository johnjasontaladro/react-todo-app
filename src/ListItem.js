import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

function ListItem() {
  const { todo, setTodo } = useContext(AppContext);
  const { display } = useContext(AppContext);

  let todoListItem = [];

  useEffect(() => {}, [todo, display]);

  switch (display) {
    default:
    case "All":
      todoListItem = todo;
      break;
    case "Active":
      todoListItem = todo.filter((item, index) => {
        return item.status === "Active";
      });
      break;
    case "Completed":
      todoListItem = todo.filter((item, index) => {
        return item.status === "Completed";
      });
      break;
  }

  const onClickRemove = (event) => {
    const newTodo = todo.filter((item, index) => {
      return item.todo !== event.target.dataset.todo;
    });

    setTodo(newTodo);

    // set local storage
    localStorage.setItem('myTodoList', JSON.stringify(newTodo));
  };

  const onChangeComplete = (event) => {
    const newTodo = [];
    const selectedTodo = event.target.dataset.todo;
    console.log("selectedTodo: ", selectedTodo);
    console.log("event.target.checked: ", event.target.checked);
    console.log("todo before: ", todo);

    todo.forEach((element) => {
      console.log("element: ", element);
      let status = element.status;

      if (element.todo === selectedTodo) {
        status = event.target.checked ? "Completed" : "Active";
      }

      newTodo.push({
        todo: "" + element.todo,
        status: status,
      });
      console.log("status after: ", status);
    });

    setTodo(newTodo);

    // set local storage
    localStorage.setItem('myTodoList', JSON.stringify(newTodo));
  };

  return (
    <div className="list-wrapper">
      {!todoListItem.length && (
        <div className="alert alert-secondary">No list available!</div>
      )}
      <ul className="d-flex flex-column-reverse todo-list">
        {todoListItem.map((item, key) => (
          <li
            key={key + item}
            className={item.status === "Completed" ? "completed" : ""}
          >
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={onChangeComplete}
                  data-todo={item.todo}
                  checked={item.status === "Completed"}
                />{" "}
                {item.todo}
                <i className="input-helper"></i>
              </label>
            </div>
            <i
              className="remove mdi mdi-close-circle-outline"
              onClick={onClickRemove}
              data-todo={item.todo}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
