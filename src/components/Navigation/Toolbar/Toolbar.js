import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/Toggle/Toggle';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Toggle clicked={props.toggleClicked} />
            <div className={[classes.Logo, classes.DesktopOnly].join(' ')}>
                <Logo />
            </div>
            <div className={classes.DesktopOnly}>
                <NavigationItems />
            </div>
        </header>

    );
};

export default Toolbar;
