import React from 'react';
import Logo from '../../assets/images/original.png';
import classes from './Logo.module.css';


const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={Logo} alt="Burger Logo" />
        </div>
    );
};

export default logo;