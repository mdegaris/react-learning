import React from 'react';
import classes from './CartItem.module.css';

const CartItem = ({ item, onAdd, onSubtract }) => {
    const displayPrice = `$${item.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{item.name}</h2>
                <div className={classes.summary}>
                    <div className={classes.price}>{displayPrice}</div>
                    <div className={classes.amount}>x {item.amount}</div>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={onSubtract}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
