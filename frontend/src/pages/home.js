import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const [ products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = async() => {
    const response = await axios.get('http://localhost:8080/product');
    setProducts(response.data)
  }

  const addProduct = () => {
    navigate('/add')
  }

  const editProduct = () => {
    navigate('/edit')
  }

  const deleteProduct = async(id) => {
    await axios.delete(`http://localhost:8080/product/${id}`);
    getProducts();
  }

  return (
    <div className='container'>
        <button className='btn-add' onClick={addProduct}>Add Product</button>
        <table className='table-data'>
            <thead>
              <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody>
                  {
                      products.map(( item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td className='action'>
                              <Link to={`edit/${item.id}`} className='btn-edit' onClick={editProduct}>Edit Product</Link>
                              <button className='btn-delete' onClick={() => deleteProduct(item.id)}>Delete Product</button>
                            </td>
                        </tr>
                      ))
                  }
            </tbody>
        </table>
    </div>
  )
}

export default Home;