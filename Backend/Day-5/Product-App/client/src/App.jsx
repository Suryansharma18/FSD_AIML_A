import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<h1>Signup Page</h1>}/>

        <Route path='/login' element={<h1>Login Page</h1>}/>
        <Route path='/viewproduct' element={<h1>View Products</h1>}/>
        <Route path='/addproduct' element={<h1>Add Product</h1>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

