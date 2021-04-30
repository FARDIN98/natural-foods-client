import axios from 'axios';
import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
 
 
    const onSubmit = data => {
        const productData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://morning-headland-82365.herokuapp.com/addProduct`
 
        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };
 
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e42c0e7eaa7d207e0bf0bd14173e39da');
        imageData.append('image', event.target.files[0])
 
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container row">
            <div className="col-md-6">
                <h2>Natural Foods</h2>
            </div>
            <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Product Name</h3>
                <input name="name" placeholder="Add New Product" ref={register} />
                <br />
                <h3>Product Weight</h3>
                <input name="weight" placeholder="Weight" ref={register} />
                <br />
                <h3>Product Price</h3>
                <input name="price" placeholder="Price" ref={register} />
                <h3>Product Photo</h3>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <br />
                <Button variant="success" type="submit">Save</Button>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;