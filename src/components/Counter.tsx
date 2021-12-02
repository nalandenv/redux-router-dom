import { connect } from "react-redux";
import { increment } from "../redux/counterTypes";

const Counter = ({ Counter, increment }: any) => {
  return (
    <>
      <h1>Counter: {Counter}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

const matchStateToProps = (state: any) => {
  return {
    Counter: state.counter,
  };
};

const matchDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(Counter);
