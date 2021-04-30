import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {name,imageURL,price,weight,_id} = props.pd

    const history = useHistory()

    function handleClick(id){
        history.push(`/review/${id}`)
    }

    return (
        <div>
            <Card className="cardStyle shadow-sm p-2 bg-body rounded container" style={{ width: '14rem' }}>
                <Card.Img className="image" variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="text-dark text-center">Name: {name}</Card.Title>
                    <p className="text-dark text-center">Price: {price}</p>
                    <p className="text-dark text-center">Weight: {weight}</p>
                    <Button onClick={()=>handleClick(_id)} className="text-light col justify-content-center" variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>  
    );
};

export default Product;