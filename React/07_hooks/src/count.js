import "./App.css";
import { useReducer } from "react";

function App() {
  const [count, countDispatch] = useReducer((state, action) => {
    console.log(state, action);
    return state + 1;
  }, 1);

  const HandlerAdd = () => countDispatch({ type: "ADD" });

  return (
    <div className="App">
      <button>-</button>
      <span>{count}</span>
      <button onClick={HandlerAdd}>+</button>
    </div>
  );
}

export default App;
