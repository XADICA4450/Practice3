
import { Route, Routes } from 'react-router-dom'
import Layouts from '../Layoutys/Layouts'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import Pages from '../Pages/Pages/Pages'

import Shop from '../Pages/Shop/Shop'
import './App.css'
import Blog from '../Pages/Blog/Blog'
import Details from '../Pages/Details/Details'



function App() {


  return (
    <>
 <Routes>
  <Route path='/' element={<Layouts/>}>
  <Route index element={<Home/>}/>
  <Route  path='/shop' element={<Shop/>}/>
  <Route path='/pages' element={<Pages/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/:id' element={<Details/>}/>

 <Route path='*'/>  </Route>

 </Routes>
    </>
  )
}

export default App
