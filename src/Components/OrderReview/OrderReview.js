import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products] =useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h3>{cart.length}</h3>
            <h2>this is order review</h2>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;