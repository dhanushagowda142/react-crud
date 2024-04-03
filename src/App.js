import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Home from './pages/Home'

import Update from './pages/Update'
import Pnf from './Components/Pnf'
import Createe from './pages/Createe'


function App() {
  return (
    <BrowserRouter>
     <Menu/>
     <Routes>
        <Route path={'/'} element={<Home/>} />      
        <Route path={'/create'} element={<Createe/>} />      
        <Route path={'/edit'} element={<Update/>} />      
        <Route path={'/*'} element={<Pnf/>} />      
     </Routes>
    </BrowserRouter>
  )
}

export default App