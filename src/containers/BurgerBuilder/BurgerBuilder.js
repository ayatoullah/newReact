import React , { Component } from 'react';
import Aux from '../../hoc/_aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
//import burger from '../../components/Burger/Burger';
const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese :0.4,
    meat : 1.3,
    bacon : 0.7

}
class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad :0,
            bacon :0,
            cheese :0,
            meat :0

        },
        totalPrice :4
    }
    addIngredientHandler=(type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredient ={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients : updatedIngredient,totalPrice:newPrice});
      

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredient ={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ingredients : updatedIngredient,totalPrice:newPrice});
      

    }
    render () {
       
        
        
       const  disabledInfo ={
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log('disabledInfo',disabledInfo);
        


        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BurgerControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
                </div>

            </Aux>
        );
    }
}
export default BurgerBuilder;