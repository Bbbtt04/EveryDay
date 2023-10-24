import { memo, useMemo, useState } from "react";
import "./App.css";

const Child = memo(({ data }) => {
  console.log("child render...", data.name);
  return (
    <div>
      <div>child</div>
      <div>{data.name}</div>
    </div>
  )
})

function App() {
  console.log("App render...");
  const [count, setCount] = useState(0)
  const [name, setName] = useState('moon')
  const data = useMemo(() => name, [name])

  return (
    <div className="App">
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <Child data={data}></Child>
    </div>
  );
}

export default App;
