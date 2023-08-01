import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart ,setCart] = useState([])
    useEffect(()=>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // local storage work
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
        for(const key in savedCart){
            const addedProduct = products.find(product => product.key === key);
            storedCart.push(addedProduct);
        }
          setCart(storedCart);  
        }

    },[products])
    
    const handleAddToCart =(product) => {
        // console.log(product);
        const newCart = [...cart , product];
        setCart(newCart);
        addToDb(product.key)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>Products:{products.length}</h3> */}
                {
                    products.map(product => <Product 
                         key={product.key}
                         product={product}
                         handleAddToCart ={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
            
        </div>
    );
};

export default Shop;