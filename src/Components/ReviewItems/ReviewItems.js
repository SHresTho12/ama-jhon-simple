import React from 'react';
import "./ReviewItem.css"
const ReviewItems = (props) => {

const {name,quantity,key,price} = props.product;


    return (
        <div className="review-item ">
            
            <h4 className="item-name">Item name : {name}</h4>
            <p>quantity: {quantity}</p>
            <h5>Price: ${price}</h5>
            <br/>
            <button className="cart-button" onClick={()=>props.removeProduct(key)}>Remove</button>
            
           
        </div>
    );
};

export default ReviewItems;