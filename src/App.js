import React, { createContext, useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
import TodoNav from "./TodoNav";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const todoLocalStorage = localStorage.getItem('myTodoList') || '[]';
  const [todo, setTodo] = useState(JSON.parse(todoLocalStorage));
  const [display, setDisplay] = useState("All");

  return (
    <AppContext.Provider value={{ todo, setTodo, display, setDisplay }}>
      <div className="App">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row-fluid container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title">Todo list by JT</h4>
                    <AddItem />
                    <TodoNav />
                    <ListItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
