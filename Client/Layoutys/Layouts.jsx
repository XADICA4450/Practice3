import React from 'react'
import Navbar from '../Companents/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layouts