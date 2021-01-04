import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Ax/Ax';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

updatePurchaseState = (ingridients) => {
    const sum = Object.keys(ingridients).map(igKey => {
        return ingridients[igKey];
    }).reduce((sum, el) => {
        return sum + el;
    }, 0);
    this.setState({purchasable: sum > 0 ? true : false});
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
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
    this.updatePurchaseState(updatedIngridients);
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
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
    this.updatePurchaseState(updatedIngridients);

}

purchaseHandling = () => {
    this.setState({purchasing: true});
}

purchaseCloseHandling = () => {
    this.setState({purchasing: false});
}

purchaseContinueHandler = () => {
    alert('You continue!');
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCloseHandling}>
                    <OrderSummary 
                      ingridients={this.state.ingridients}
                      price={this.state.totalPrice}
                      purchaseCancelled={this.purchaseCloseHandling}
                      purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                ingridientAdd={this.addIngridientHandler}
                ingridientRemove={this.removeIngridientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandling}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;