import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'
import { CiShoppingBasket } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";



  


const Navbar

= () => {
  return (
    <>
 <div className={styles.navbar}>
 <span className={styles.title}>
  <h1 style={{color:'#2f7dfc'}}>Winter</h1></span>


    <nav>
        <ul>
            <li><NavLink to='/' end >HOME</NavLink></li>
            <li><NavLink to='/shop'>SHOP</NavLink></li>
            <li><NavLink to='/pages'>PAGES</NavLink></li>
            <li><NavLink to='/blog'>BLOG</NavLink></li>
            <li><NavLink to='/contact'>CONTACT</NavLink></li>

        </ul>
    </nav>

    <div className={styles.icons}>
    <CiShoppingBasket />
    <IoMdSearch />
   

  



    </div>
 </div>

    </>
  )
}

export default  Navbar

