import React, { useReducer } from "react";
import { Container } from "./reducer.style";

function ReducerComponent(props) {
  //   const [count, setCount] = useState(0);

  const reducer = (state, { type }) => {
    switch (type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <Container>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
        <button onClick={() => dispatch({ type: "plus" })}>+</button>
      </div>
    </Container>
  );
}

export default ReducerComponent;
