import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart'
import image from '../../images/giphy.gif'
const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] =useState(false);

const handlePlaceOrder = () =>{
setCart([]);
    processOrder();
    setOrderPlaced(true);
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

let thankyou;
if(orderPlaced)
{
    thankyou = <img src = {image}></img>
}


    return (
       
        <div className="shop-container">
            <div className="product-container">
           
            {
            
            cart.map(pd => <ReviewItems product = {pd} removeProduct = {removeProduct} key = {pd.key} ></ReviewItems>)

            }
            {
              thankyou
            }
            </div>
           
             <div className="cart-container">
               <Cart cart = {cart}><button className="cart-button" onClick={handlePlaceOrder}>Place Order</button></Cart>
            </div>
        </div>
    );
}

export default Review;