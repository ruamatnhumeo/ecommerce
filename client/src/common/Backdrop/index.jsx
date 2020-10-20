import React from "react";
import "./Backdrop.scss";

function Backdrop(props) {
	return (
		props.isOpen && <div className="backdrop" onClick={props.onClick}></div>
	);
}

export default Backdrop;
