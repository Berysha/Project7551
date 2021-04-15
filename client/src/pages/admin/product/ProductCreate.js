import React, {useEffect, useState} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import {toast} from 'react-toastify';
import {useSelector} from 'react-redux';
import {createProduct} from '../../../functions/product';

const initialState = {
    title: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    subs: [],
    shipping: '',
    quantity: '',
    images: [],
    colors:  ["Black", "Brown", "Silver", "White", "Blue"],
    brands : ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: '',
    brand: '',
};

const ProductCreate = () => {

    const [values, setValues] = useState(initialState);

    //destruction
    const { 
        title, 
        description, 
        price, 
        category, 
        subs, 
        shipping, 
        quantity, 
        images, 
        colors, 
        brands, 
        color, 
        brand
    } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <div className = "col-md-2">
                    <AdminNav />
                </div>
                <div className="col-md-10"> 
                    <h4> Product create </h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label> Title </label>
                            <input 
                                type="text"
                                name="title"
                                className="form-control"
                                value={setValues.title}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label> Description </label>
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                value={setValues.description}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label> Price </label>
                            <input 
                                type="number"
                                name="price"
                                className="form-control"
                                value={setValues.price}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label> Shipping </label>
                            <select
                                name="shipping"
                                className="form-control"
                                onChange={handleChange}>

                                <option> Please select </option>
                                <option value="No"> No </option>
                                <option value="Yes"> Yes </option>

                            </select>
                        </div>

                        <div className="form-group">
                            <label> Quantity </label>
                            <input 
                                type="number"
                                name="quantity"
                                className="form-control"
                                value={setValues.quantity}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label> Colors </label>
                            <select
                                name="colors"
                                className="form-control"
                                onChange={handleChange}
                            >
                                <option> Please select </option>
                                {colors.map(c => <option key={c} value={c}> {c} </option>)}
                            </select>
                        </div>

                        <div className="form-group">
                            <label> Brands </label>
                            <select
                                name="brands"
                                className="form-control"
                                onChange={handleChange}
                            >
                                <option> Please select </option>
                                {brands.map(b => <option key={b} value={b}> {b} </option>)}
                            </select>
                        </div>

                        <button className="btn btn-outline-success"> Save </button>
                    </form>   

                </div>
            </div>
        </div>
    );
};

export default ProductCreate;