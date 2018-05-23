import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

injectGlobal`
	* {
		margin: 0;
		padding: 0;
		font-family: Orbitron, sans-serif;
		box-sizing: border-box;
  }
  html {
    background: #f4f7fb;
  }
`;
