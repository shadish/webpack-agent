import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

const Index = () => {
	return <div className={"style.helloLabel"}>Hello world!</div>;
}

ReactDOM.render(<Index />, document.getElementById("index"));
