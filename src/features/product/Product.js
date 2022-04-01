import React from 'react';
import { useSelector } from 'react-redux';

const Product = () => {
    const products = useSelector(data => {
        return data.product.value
    });
    return (
        <div>
            {products?.map(item => <div key={item.name}>{item.name}</div>)}
        </div>
    )
}

export default Product