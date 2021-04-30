import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import {Spinner} from 'react-bootstrap'
import './Home.css'

const Home = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('https://morning-headland-82365.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div >
            <div className="product-container">
            {
                product.length === 0 && <Spinner animation="grow" />
            }
            {
                product.map(pd => <Product pd={pd}  ></Product> )
            }
            </div>
        </div>
    );
};

export default Home;