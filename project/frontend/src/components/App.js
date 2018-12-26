import React from "react";
import ReactDom from "react-dom";
import DataProvider from "./DataProvider";

const App = () => (
	<DataProvider endpoint="api/lead/" render={data => <Table data={data} />} />
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
