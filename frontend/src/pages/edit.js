import React, { useState, useEffect } from 'react'
import './style.css';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Edit = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const {id} = useParams();

  const navigate = useNavigate();

  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/product/${id}`, {
      title: title,
      price: price
    });
    navigate('/');
  }

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async() => {
    const response = await axios.get(`http://localhost:8080/product/${id}`)
    setTitle(response.data.title);
    setPrice(response.data.price);
  }

  const back = () => {
    navigate('/');
  }

  return (
    <div className='container'>
        <h2>Edit Product</h2>
        <form onSubmit={updateData}>
            <div className='input-field'>
                <i className='fas fa-product'></i>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='input-field'>
                <i className='fas fa-product'></i>
                <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <button className='submit'>Edit</button>
            <button className='back' onClick={back}>Back</button>
        </form>
    </div>
  )
};

    

export default Edit;