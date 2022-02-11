import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./redux/reducers";
import "./Components/MSSM/UniversalSansGX.ttf";
import { HashRouter } from "react-router-dom";

const store = createStore(rootReducers);

ReactDOM.render(
	<React.StrictMode>
		{/* note: hashrouter for ghpages */}
		{/* <HashRouter> */}
		<App />
		{/* </HashRouter> */}
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
