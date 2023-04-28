import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="송민섭" color="red" isSpecial />
      <Hello color="green"/>
    </Wrapper>
  )
}

export default App;