import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CounterDetails = () => {
  const counter = useSelector((state: any) => state.counter);

  return (
    <div>
      <Link to="/">
        <button>BACK</button>
      </Link>
      <h2>Current state of counter {counter}</h2>
    </div>
  );
};

export default CounterDetails;
