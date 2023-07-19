import React, {useState, useMemo} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './public/Login'
import Template from './user/Template'
import TemplateAdmin from './admin/TemplateAdmin'
import PortatilesPage from './user/PortatilesPage'
import PortatilesPageAdmin from './admin/PortatilesPageAdmin'
import CarList from './public/CarList'
import { ShopContext } from './public/Context'

const App = () => {
  const [productsToShop, setToShop] = useState([])
  const providerValue = useMemo(() => ({productsToShop, setToShop}),[productsToShop, setToShop])

  return(
    <ShopContext.Provider value={providerValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/user" element={<Template/>}/>
          <Route path="/admin" element={<TemplateAdmin/>}/>
          <Route path="/user/portatiles" element={<PortatilesPage/>}/>
          <Route path="/admin/portatiles" element={<PortatilesPageAdmin/>}/>
          <Route path="/user/carlist" element={<CarList/>}/>
        </Routes>
      </BrowserRouter>
    </ShopContext.Provider>
  )
}

export default App