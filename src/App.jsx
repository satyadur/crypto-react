import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Fotter from './components/Footer/Fotter'

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
    </Routes>
    <Fotter/>
    </div>
  )
}

export default App