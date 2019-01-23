import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <strike>yo</strike>
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
