import React from 'react';
import classes from './OrderSummary.css';
import Aux from '../../../hoc/_aux';
import Button from '../../UI/Button/Button';
const orderSummary= (props) =>{
    const ingredientSummary=Object.keys(props.ingredients).map(
         (igKey)=> <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey} :</span>{props.ingredients[igKey]}</li>   
        );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Enjoy your Meal with the following Ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Total Price:<strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btntype="Success" clicked={props.purchaseContinued}>SUBMIT</Button>
            <Button btntype="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        </Aux>
    );
}


export default orderSummary;