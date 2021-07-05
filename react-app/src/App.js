import React from "react";
import Header from "./components/Header";
import SearchPage from "./Pages/SearchPage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="main-content">
				<SearchPage />
			</div>
		</div>
	);
}

export default App;
