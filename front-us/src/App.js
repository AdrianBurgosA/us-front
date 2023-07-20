import React, {useState, useMemo} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './public/Login'
import PortatilesPage from './user/PortatilesPage'
import EscritoPage from './user/EscritorioPage'
import HardwarePage from './user/HardwarePage'
import PerifericoPage from './user/PerifericoPage'
import SoftwarePage from './user/SoftwarePage'
import AccesoriosPage from './user/AccesoriosPage'
import PortatilesPageAdmin from './admin/PortatilesPageAdmin'
import EscritoPageAdmin from './admin/EscritorioPageAdmin'
import HardwarePageAdmin from './admin/HardwarePageAdmin'
import PerifericoPageAdmin from './admin/PerifericosPageAdmin'
import SoftwarePageAdmin from './admin/SoftwarePageAdmin'
import AccesoriosPageAdmin from './admin/AccesoriosPageAdmin'
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
          {/*Paginas para admin */}
          <Route path="/admin/portatiles" element={<PortatilesPageAdmin/>}/>
          <Route path="/admin/escritorio" element={<EscritoPageAdmin/>}/>
          <Route path="/admin/hardware" element={<HardwarePageAdmin/>}/>
          <Route path="/admin/perifericos" element={<PerifericoPageAdmin/>}/>
          <Route path="/admin/software" element={<SoftwarePageAdmin/>}/>
          <Route path="/admin/accesorios" element={<AccesoriosPageAdmin/>}/>
          {/*Paginas para usuario normal */}
          <Route path="/user/portatiles" element={<PortatilesPage/>}/>
          <Route path="/user/escritorio" element={<EscritoPage/>}/>
          <Route path="/user/hardware" element={<HardwarePage/>}/>
          <Route path="/user/perifericos" element={<PerifericoPage/>}/>
          <Route path="/user/software" element={<SoftwarePage/>}/>
          <Route path="/user/accesorios" element={<AccesoriosPage/>}/>
          <Route path="/user/carlist" element={<CarList/>}/>
        </Routes>
      </BrowserRouter>
    </ShopContext.Provider>
  )
}

export default App