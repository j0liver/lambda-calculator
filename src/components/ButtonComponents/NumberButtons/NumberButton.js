import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick = {() => props.showValue(props.value)}>
    {props.value}
    </button>
  );
};
export default NumberButton