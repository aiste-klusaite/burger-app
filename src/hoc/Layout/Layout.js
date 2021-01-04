import React, { Component } from 'react';
import Aux from '../Ax/Ax';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        visible: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            visible: false
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {visible: !prevState.visible}
        });
    }

    render () {
         return (
            <Aux>
                <Toolbar toggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.visible} closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}> 
                    {this.props.children}
                </main>
            </Aux>
         );
    }
};
export default Layout;