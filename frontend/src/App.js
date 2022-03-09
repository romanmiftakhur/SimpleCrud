import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './pages/add';
import Edit from './pages/edit';
import Home from './pages/home';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;