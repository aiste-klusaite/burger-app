import React from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => {
    return (
        <div onClick={props.clicked} className={classes.DrawerToggle}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default Toggle;