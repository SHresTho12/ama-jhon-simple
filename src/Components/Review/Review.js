import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart'
const Review = () => {
    const [cart,setCart] = useState([]);

const handlePlaceOrder = () =>{
setCart([]);
    processOrder();
    console.log("hello");
}

const removeProduct = (productKey) =>{
const newCart = cart.filter(pd => pd.key !== productKey);
setCart(newCart);

removeFromDatabaseCart(productKey);
}


    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct  = productKeys.map(key => {
            const product= fakeData.find(pd => pd.key === key);

            product.quantity = savedCart[key];
            return product;
            
    })
setCart(cartProduct);
},[]);
    return (
       
        <div className="shop-container">
            <div className="product-container">
           
            {
            
            cart.map(pd => <ReviewItems product = {pd} removeProduct = {removeProduct} key = {pd.key} ></ReviewItems>)

            }
            </div>
           
             <div className="cart-container">
               <Cart cart = {cart}><button className="cart-button" onClick={handlePlaceOrder}>Place Order</button></Cart>
            </div>
        </div>
    );
}

export default Review;