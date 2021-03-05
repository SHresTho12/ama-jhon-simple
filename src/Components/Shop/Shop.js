import React, { useState,useEffect } from 'react';
import fakeData from '../../fakeData'
import Product from '../product/Product';
import Cart from '../Cart/Cart'
import './Shop.css'
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {

const fake10 = fakeData.slice(0,10);
const[products , setProducts] = useState(fake10);
const [cart,setCart] = useState([])

useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart); 
    const previousCart = productKeys.map(existingkey =>{
        const product = fakeData.find(pd=> pd.key === existingkey);
        product.quantity = savedCart[existingkey];
        return product;
    })
   setCart(previousCart);
}, [])

const handleAddProduct = (product) =>{
const toBeaddedKey = product.key;
const sameProduct = cart.find(pd => pd.key === product.key);
let count = 1;
let newCart;
if(sameProduct){
    count = sameProduct.quantity + 1;
    sameProduct.quantity = count;
    const others = cart.filter(pd => pd.key !== toBeaddedKey);
    newCart = [...others,sameProduct];
}

else{
    product.quantity = 1;
    const newCart = [...cart,product];
   
}

   
    setCart(newCart);
    
    addToDatabaseCart(product.key,count);
}


    return (
        <div className = "shop-container">
            <div className="product-container">
            {
                    products.map(product => <Product showButton = {true} product={product} key={product.key} handleAddProduct = {handleAddProduct}></Product>)
                }

            </div>
            <div className="product-cart">
                
                <Cart cart = {cart}> <Link to="/review">
            <button className="cart-button">Review</button>
            </Link></Cart>
            </div>
           
        </div>
    );
};

export default Shop;