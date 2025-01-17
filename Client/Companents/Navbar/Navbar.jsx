import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'
import { IoMdSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { SlBasket } from "react-icons/sl";



  


const Navbar

= () => {
  return (
    <>
 <div className={styles.navbar}>
 <span className={styles.title}>
  <h1>COLO</h1>  <h1 style={{color: '#fe5460'}}>SHOP</h1></span>


    <nav>
        <ul>
            <li><NavLink to='/' end >HOME</NavLink></li>
            <li><NavLink to='/shop'>SHOP</NavLink></li>
            <li><NavLink to='/promotion'>PROMOTION</NavLink></li>
            <li><NavLink to='/pages'>PAGES</NavLink></li>
            <li><NavLink to='/blog'>BLOG</NavLink></li>
            <li><NavLink to='/contact'>CONTACT</NavLink></li>

        </ul>
    </nav>

    <div className={styles.icons}>
    <IoMdSearch />
    <IoIosContact />
    <SlBasket />

  



    </div>
 </div>

    </>
  )
}

export default  Navbar

