import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../actions/product.actions';
import Product from './Product';

const ProductListing = () => {

    const products = useSelector(state => state.productReducer.products)
    console.log(products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProducts());
    }, [])
    return (

        <div className="ui grid container">
            <Product />
        </div>
    );
};

export default ProductListing;