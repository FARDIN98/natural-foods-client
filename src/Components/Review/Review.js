import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';



const Review = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const handleCheckout = () => {
        const orderInfo = {...product ,...loggedInUser, orderTime: new Date() }
        delete orderInfo.id
        const url = `https://morning-headland-82365.herokuapp.com/addOrders`
    
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderInfo)
        })
          .then(res => {
            console.log('server side response', res)
          })
      }

    useEffect(() => {
        fetch(`https://morning-headland-82365.herokuapp.com/review/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
 
    return (
        <div className="container mt-5">
            <Table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleCheckout} className="float-right" variant="primary">Checkout</Button>
        </div>
    );
};
 
export default Review;
