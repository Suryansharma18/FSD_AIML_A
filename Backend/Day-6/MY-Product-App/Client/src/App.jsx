import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ViewUser from './pages/ViewUser'

import './App.css'
const App=()=> {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}>
        
        </Route>
        <Route path="/viewusers" element={<ViewUser/>}></Route>
        <Route path="*" element={<h1>404 Error</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
