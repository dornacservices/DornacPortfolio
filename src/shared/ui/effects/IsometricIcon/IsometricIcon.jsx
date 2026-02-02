import React from 'react';
import './IsometricIcon.css';

const IsometricIcon = ({ type = 'cube', color = 'primary' }) => {
    return (
        <div className={`iso-icon-wrapper ${type} ${color}`}>
            <div className="iso-shape">
                <div className="face top"></div>
                <div className="face left"></div>
                <div className="face right"></div>
            </div>
        </div>
    );
};

export default IsometricIcon;
