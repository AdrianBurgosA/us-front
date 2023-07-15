import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './public/Login'
import Template from './user/Template'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/User" element={<Template/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App