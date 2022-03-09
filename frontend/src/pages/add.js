import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [ title, setTitle] = useState('');
  const [ price, setPrice] = useState('');
  const [ message, setMessage] = useState('');

  const navigate = useNavigate();

  const saveData = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/product', {
      title: title,
      price: price
    });
    navigate('/');
  }

  const back = () => {
    navigate('/')
  }

  return (
    <div className='container'>
        <h2>Add Product</h2>
        <form onSubmit={saveData}>
            <div className='input-field'>
                <i className='fa fa-product'></i>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='input-field'>
                <i className='fa fa-product'></i>
                <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <button className='submit'>Add</button>
            <button className='back' onClick={back}>Back</button>
        </form>
    </div>
  )
}

export default Add;