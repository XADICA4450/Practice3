
import { Route, Routes } from 'react-router-dom'
import Layouts from '../Layoutys/Layouts'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import Pages from '../Pages/Pages/Pages'
import Promotion from '../Pages/Promotion/Promotion'
import Shop from '../Pages/Shop/Shop'
import './App.css'
import Blog from '../Pages/Blog/Blog'
import Details from '../Pages/Details/Details'
import Wishlist from '../Pages/Wishlist/Wishlist'


function App() {


  return (
    <>
 <Routes>
  <Route path='/' element={<Layouts/>}>
  <Route index element={<Home/>}/>
  <Route  path='/shop' element={<Shop/>}/>
  <Route path='/promotion' element={<Promotion/>}/>
  <Route path='/pages' element={<Pages/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/:id' element={<Details/>}/>
 <Route path='/:id' element={<Wishlist/>}/>
 <Route path='*'/>  </Route>

 </Routes>
    </>
  )
}

export default App
