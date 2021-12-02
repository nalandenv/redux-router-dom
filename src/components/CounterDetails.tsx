import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CounterDetails = ({ Counter }: any) => {
  console.log(Counter);
  return (
    <div>
      <Link to="/">
        <button>BACK</button>
      </Link>
      <h2>Current state of counter {Counter}</h2>
    </div>
  );
};

const matchStateToProps = (state: any) => {
  return {
    Counter: state.counter,
  };
};

export default connect(matchStateToProps)(CounterDetails);
