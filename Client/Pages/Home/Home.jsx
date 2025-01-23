import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import { FaTruckFast } from "react-icons/fa6";
import { RiFileList3Line } from "react-icons/ri";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF, FaInfoCircle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import axios from "axios"
import { BASE_URL } from "../../src/constans";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { WishlistContext } from "../Wishlist/Wishlist";
import sytles from './home.module.scss'








const Home = () => {


  const [menu, setMenu] = useState([])
  const [menuCopy, setMenuCopy] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const { toggleWishlist } = useContext(WishlistContext)






  const getMenu= async () => {
      try {
          const res = await axios(`${BASE_URL}`)
    
          setMenu(res.data.data)
          console.log(res.data.data);
          
          setMenuCopy(res.data.data)
      } catch (error) {
          console.log(error);
      }
  }



   const filteredMenu = menu.filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
  useEffect(() => {
      getMenu()
  }, [])

  const handleChange = (e) => {
    let sortedMenu = null;
    console.log(e.target.value);
    if (e.target.value === "asc") {
        sortedMenu = [...menu].toSorted((a, b) => a.price - b.price)
    } else if (e.target.value === "desc") {
        sortedMenu = [...menu].toSorted((a, b) => b.price - a.price)
    } else {
        sortedMenu= [...menuCopy]
    }
    setMenu([...sortedMenu])
}
  return (
    <>
<div className={sytles.container}>
  <div className={sytles.header}>
    <div className={sytles.desc}>
    <p>Winter Fasion</p>
  <h1> Fasion</h1>
  <h1>Collection 2019</h1>
  <button className={sytles.btn}>Shop Now</button>
    </div>

  </div>
<div className={sytles.card}>
<Grid container spacing={3}>
  <Grid size={{ xs: 12, md: 6 , lg:4}}>
    <img src="https://preview.colorlib.com/theme/winter/img/feature_1.png" alt="" />
    <button className={sytles.but}>Shop For Male</button>
    
  </Grid>
  <Grid size={{ xs: 12, md: 6, lg:4  }}>
    <img src="https://preview.colorlib.com/theme/winter/img/feature_2.png" alt="" />
    <button className={sytles.but}>Shop For Male</button>
    
  </Grid>
  <Grid size={{ xs: 12, md: 6,  lg:4 }}>
    <img src="https://preview.colorlib.com/theme/winter/img/feature_3.png" alt="" />
    <button className={sytles.but}>Shop For Male</button>
  
  </Grid>

</Grid>
 
<div className='backcard'>

<select name="" id="" onChange={handleChange}>
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                            <option value="default">DEFAULT</option>
                        </select>
<TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => { setSearchQuery(e.target.value) }} />
<Grid container spacing={10}>
        {
            menu.length > 0 && menu.map((m) => {
                return (<Grid size={{ xs: 12, md: 6, lg: 4}} key={m._id}>
                    <div className='menu'>
                        <img src={m.imageUrl} alt={m.title} />
                      <div className="h">  <h3 className='title'>{m.title}</h3>
                      <h3 className='description'>{m.description}</h3></div>
                        <p className='price'>${m.price} </p>



                        
                   
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <Link to={`/${m._id}`}><FaInfoCircle /></Link>
                            <Link to={`/${m._id}`}><CiShoppingBasket /></Link>
                            <FaRegHeart onClick={() => { toggleWishlist(m) }} />
                          
                        </div>
                    </div>
                </Grid>)
            })
        }
    </Grid>
</div>


</div>

<div className={sytles.free}>
<Grid container spacing={3}>
  <Grid size={{ xs: 12, md: 6 , lg:3}}>
  <FaTruckFast className={sytles.icn} />
  <h1>Free shipping</h1>
  <p>Divided face for bearing the divide unto <br/>seed winged divided light Forth.</p>


    
  </Grid>
  <Grid size={{ xs: 12, md: 6, lg:3 }}>
  <RiFileList3Line  className={sytles.icn}/>
  <h1>Free shipping</h1>
  <p>Divided face for bearing the divide unto <br/>seed winged divided light Forth.</p>
 

    
  </Grid>
  <Grid size={{ xs: 12, md: 6,  lg:3 }}>
  <BsCreditCard2BackFill className={sytles.icn} />
  <h1>Free shipping</h1>
  <p>Divided face for bearing the divide unto <br/> seed winged divided light Forth.</p>

  
  </Grid>

  <Grid size={{ xs: 12, md: 6,  lg:3 }}>
  <FaRegClock className={sytles.icn} />
  <h1>Free shipping</h1>
  <p>Divided face for bearing the divide unto <br/> seed winged divided light Forth.</p>

  
</Grid>

</Grid>

</div>

<div className={sytles.fivecards}>
<img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_1.png" alt="" />
<img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png" alt="" />
<img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_3.png" alt="" />
<img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_4.png" alt="" />
<img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_5.png" alt="" />
</div> 
 
 <div className={sytles.footer}>
 <Grid container spacing={20}>
  <Grid size={{ xs: 12, md: 6 , lg:3}}>
    <h2>Category</h2>
    <h4>Male</h4>
    <h4>Female</h4>
    <h4>Shoes</h4>
    <h4>Fashion</h4>




    
  </Grid>
  <Grid size={{ xs: 12, md: 6, lg:3 }}>
    <h2>Company</h2>
    <h4>About</h4>
    <h4>News</h4>
    <h4>FAQ</h4>
    <h4>Contact</h4>

 

    
  </Grid>
  <Grid size={{ xs: 12, md: 6,  lg:3 }}>
    <h2>Addres</h2>
    <h4>200, Green block, NewYork</h4>
    <h4>+10 456 267 1678</h4>
    <h4 style={{color:'#205dec'}}>contact89@winter.com</h4>



  
  </Grid>

  <Grid size={{ xs: 12, md: 6,  lg:3 }}>
    <h2>Newsletter</h2>
    <input className={sytles.inpt} type='email' placeholder='Email Adress'/>
    <div className={sytles.social}>
      <button><FaFacebookF />
      </button>
      <button><FaTwitter />
      </button>
      <button><FaInstagram />
      </button>
    </div>



  
</Grid>

</Grid>
 </div>


</div>


    </>
  )
}

export default Home