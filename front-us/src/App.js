import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './public/Login'
import Template from './user/Template'
import TemplateAdmin from './admin/TemplateAdmin'
import PortatilesPage from './user/PortatilesPage'
import PortatilesPageAdmin from './admin/PortatilesPageAdmin'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={<Template/>}/>
        <Route path="/admin" element={<TemplateAdmin/>}/>
        <Route path="/user/portatiles" element={<PortatilesPage/>}/>
        <Route path="/admin/portatiles" element={<PortatilesPageAdmin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App