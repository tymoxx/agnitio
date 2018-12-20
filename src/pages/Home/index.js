import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { counterActions } from "../../bus/counter/actions";


const Home = props => (
  <>
    <h4>Home Page</h4>
    <p>Count: {props.count}</p>

    <button onClick={props.increment}>Increment</button>

    <button onClick={props.decrement}>Decrementing</button>

    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  changePage: () => push("/about")
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
