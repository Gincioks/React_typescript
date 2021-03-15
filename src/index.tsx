import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const FunctionalComponent = () => (
  <div>I am a stateless React TypeScript functional component</div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
