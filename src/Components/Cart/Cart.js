import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;

let totalPrice =0 ;
for(let i = 0; i<cart.length;i++){
    const product = cart[i];
    totalPrice = totalPrice + product.price*product.quantity;

}


    // const totalPrice = cart.reduce((total,prd)=> total + prd.price*prd.quantity,0);
    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping =4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
   
    // const formatNumber = num => {
    //     const precision = num.toFixed(2);
    //     return Number(precision);

    // }
    let tax = (totalPrice * .10);
    const grandTotal = shipping+totalPrice+tax;
    return (
        <div>
            <h4>Order Summery: 12</h4>
            <p>Items Order: {cart.length}</p>
            <p>Shipping Cost : {shipping}</p>
            <p> Price :{totalPrice}</p>
            <p>Total Cost:{grandTotal} </p>
            <br/>
            <Link to="/review">
            <button className="cart-button">Review</button>
            </Link>
        </div>
    );
};

export default Cart;