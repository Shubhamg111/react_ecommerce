import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Productpage from './pages/Productpage'
import Counterjs from './hooks/Counterjs'
import Productview from './pages/Productview'
import Cartpage from './pages/Cartpage'
import Signuppage from './pages/Signuppage'
import StateManager from './redux/StateManager'

const Myroute = () => {
  return (
    <>
     <Router>
        <Routes>
            <Route path='/' element={<Layout/>} >
                <Route index element={<Homepage/>} />
                <Route path='/products' element={<Productpage/>} />
                <Route path='/productview/:product_id' element={<Productview/>} />
                <Route path='cart' element={<Cartpage/>} />
                <Route path='/signup' element={<Signuppage/>} />
            </Route>

            <Route path='/hooks' element={<Counterjs/>} />
            <Route path='/redux' element={<StateManager/>} />


        </Routes>
     </Router>
    </>
  )
}

export default Myroute
