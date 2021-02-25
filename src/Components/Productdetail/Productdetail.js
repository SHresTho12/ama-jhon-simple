import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Productdetail = () => {
    const {productkey} = useParams();
    const product  = fakeData.find(pd => pd.key === productkey);

    return (
        <div>
            <p>{productkey} Comming soon</p>
            <Product showButton={false} product = {product}></Product>
        </div>
    );
};

export default Productdetail;