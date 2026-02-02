import React from 'react';
import './IsometricIcon.css';

const IsometricIcon = ({ type = 'cube', color = 'primary', symbol = '' }) => {
    return (
        <div className={`iso-icon-wrapper ${type} ${color}`}>
            <div className="iso-shape">
                <div className="face top">{symbol}</div>
                <div className="face left"></div>
                <div className="face right"></div>
            </div>
        </div>
    );
};

export default IsometricIcon;
