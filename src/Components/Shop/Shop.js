import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../product/Product';
import Cart from '../Cart/Cart'
import './Shop.css'
const Shop = () => {

const fake10 = fakeData.slice(0,10);
const[products , setProducts] = useState(fake10);
const [cart,setCart] = useState([],)
const handleAddProduct = (product) =>{
    const newCart = [...cart,product];
    setCart(newCart);
}

    return (
        <div className = "shop-container">
            <div className="product-container">
            {
                    products.map(product => <Product showButton = {true} product={product} handleAddProduct = {handleAddProduct}></Product>)
                }

            </div>
            <div className="product-cart">
                
                <Cart cart = {cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;