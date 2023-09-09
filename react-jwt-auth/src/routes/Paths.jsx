import React from 'react'
import PublicHome from '../pages/PublicHome'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Paths = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PublicHome />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
            </Routes>
        </div>
    )
}

export default Paths
