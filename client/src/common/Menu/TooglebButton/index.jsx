import React from 'react';
import './ToogleButton.scss';

function ToogleButton(props) {

    return (
    <div className="toogle-button" onClick={props.onClick}>
        <div className="toogle-button__inner" >
            <span className="toogle-button__line vertical"></span>
            <span className="toogle-button__line horizontal"></span>
        </div>
    </div>
    )
};

export default ToogleButton;