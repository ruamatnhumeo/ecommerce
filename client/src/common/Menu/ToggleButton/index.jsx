import React from "react";
import "./ToggleButton.scss";

function ToggleButton(props) {
	return (
		<div className="toggle-button" onClick={props.onClick}>
			<div className="toggle-button__inner">
				<span className="toggle-button__line vertical"></span>
				<span className="toggle-button__line horizontal"></span>
			</div>
		</div>
	);
}

export default ToggleButton;
