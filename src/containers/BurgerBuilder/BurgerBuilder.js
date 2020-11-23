import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

const INGRIDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    meat: 1.3,
    cheese: 0.4
}

class BurgerBuilder extends Component {

    state ={
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4

    }

addIngridientHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    const newCount = oldCount + 1;
    const updatedIngridients = {
        ...this.state.ingridients
    }
    updatedIngridients[type] = newCount;
    
    const addPrice = INGRIDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = addPrice + oldPrice;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients})
}

removeIngridientHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    if(oldCount <= 0){
        return null;
    }
    const newCount = oldCount - 1;
    const updatedIngridients = {
        ...this.state.ingridients
    }
    updatedIngridients[type] = newCount;
    
    const deductPrice = INGRIDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - deductPrice;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients})

}

    render (){

        const disabledInfo = {
            ...this.state.ingridients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <Aux>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                ingridientAdd={this.addIngridientHandler}
                ingridientRemove={this.removeIngridientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;