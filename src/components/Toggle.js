import React, { useState } from "react";

function Toggle() {
  // const [state, setState ] = useState('OFF')

  // function changeState() {
  //   setState((prevState => (prevState === 'OFF'? 'ON' : 'OFF')))
  // }
  // return <button onClick={changeState}>{state}</button>;

  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
