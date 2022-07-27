import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  return <h1>{counter}</h1>;
}

export default App;
