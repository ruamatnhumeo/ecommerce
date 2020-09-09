import React from 'react';
import "./Backdrop.scss";

function Backdrop(props) {
    return (
       props.open && <div className="backdrop" onClick={props.onClick}></div>
    );
};

export default Backdrop;