import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let {cart} =props;
    let total = 0 ;
    for(const product of cart){
        total = total + product.price;
    }
        const shipping = total > 0 ? 15: 0;
        const tax = (total + shipping) * 0.10;
        const grandTotal = total + shipping + tax ;
   
    return (
        <div>
            <h3>Order Summary</h3>
                <h5>Items Ordered: {props.cart.length}</h5>
                <br />
                <p>total: {total.toFixed(2)}</p>
                <p>shipping: {shipping}</p>
                <p>tax: {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;