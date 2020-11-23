import React from 'react';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
import classes from './Burger.module.css';

const burger = (props) => {

    let transformIngridients = Object.keys(props.ingridients).map(ingKey => {
        return [...Array(props.ingridients[ingKey])].map((_, i) => {  
           return <BurgerIngridient key={ingKey + i} type={ingKey}/>;
        });
        
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformIngridients.length === 0){
        transformIngridients = <p> Please start adding ingridients! </p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformIngridients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    )
}
    
export default burger;