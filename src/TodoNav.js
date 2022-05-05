import React, { useContext } from "react";
import { AppContext } from "./App";

function TodoNav() {
  const { setDisplay } = useContext(AppContext);

  const onClickDisplay = (display) => {
    setDisplay(display);
  };

  return (
    <ul className="nav nav-pills todo-nav">
      <li role="presentation" className="nav-item all-task active">
        <button className="nav-link" onClick={() => onClickDisplay("All")}>
          All
        </button>
      </li>
      <li role="presentation" className="nav-item active-task">
        <button className="nav-link" onClick={() => onClickDisplay("Active")}>
          Active
        </button>
      </li>
      <li role="presentation" className="nav-item completed-task">
        <button
          className="nav-link"
          onClick={() => onClickDisplay("Completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TodoNav;
