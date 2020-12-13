import "./App.styles.scss";
import { connect } from "react-redux";

function App({ count, increment, decrement }) {
  return (
    <div className="App">
      <div className="Card">
        <h1>{count}</h1>
        <button onClick={increment}>Add 1</button>
        <button onClick={decrement}>Subtract 1</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.card.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
