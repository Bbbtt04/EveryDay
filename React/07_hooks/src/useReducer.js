import "./App.css";
import { useReducer, useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [list, listDispatch] = useReducer(() => {}, []);

  return (
    <div className="App">
      <div className="top">
        <input type="text" />
        <button>添加</button>
      </div>
      <div className="todo_list">
        {list.map((item) => (
          <div className="todo_item">
            <input type="checkbox" checked />
            <div className="content">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
