import React from "react";
import "./Backdrop.scss";

function Backdrop({ isOpen, onClick }) {
	return isOpen && <div className="backdrop" onClick={onClick} />;
}

export default Backdrop;
