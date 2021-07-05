import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => (
	<button className="main-btn" onClick={onClick}>
		{children}
	</button>
);

export default Button;
