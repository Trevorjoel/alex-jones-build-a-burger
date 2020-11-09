import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from "./Burgeringredient/BurgerIngredient";
const burger = (props) => {

    console.log(props);
    // transform an object of key/value pairs into an array of burger ingredients
    // where the value of the object is important to decide how many ingredients i need
    // and keys to decide which type I need
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
               return <BurgerIngredient key={igKey + i} type={igKey} />
            } );
        } ).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please add ingredients.</p>
    }
    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
export default burger;