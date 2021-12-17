import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeProduct, selectedProduct } from '../actions/product.actions';

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log("product is", productId);
    //const [product, setProduct] = useState({});
    const product = useSelector(state => state.productReducer.selectedProduct)
    const { title, image, description, category, price } = product;

    /*   const response = axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
          setProduct(res.data)
      })
          .catch(err => console.log(err)); */

    useEffect(() => {

        dispatch(selectedProduct(productId))

        return () => {
            dispatch(removeProduct())
        }
    }, [productId])
    return (

        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;