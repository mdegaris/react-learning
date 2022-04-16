import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
    const ctx = useContext(CartContext);
    const displayPrice = `$${item.price.toFixed(2)}`;

    console.log('Cart item: ' + JSON.stringify(item));

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{displayPrice}</span>
                    <span className={classes.amount}>x {item.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={ctx.removeMeal(item.id)}>−</button>
                <button onClick={ctx.addMeal(item)}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
