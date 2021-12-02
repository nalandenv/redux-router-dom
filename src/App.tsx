import { Link } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Link to="/CounterDetails">
        <button>Check details</button>
      </Link>
      <Counter />
    </>
  );
}

export default App;
