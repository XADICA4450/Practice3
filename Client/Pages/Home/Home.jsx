import React, { useContext, useEffect, useState } from 'react'
import styles from './home.module.scss'
import Grid from '@mui/material/Grid2';
import axios from 'axios'
import { BASE_URL } from "../../src/constans";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
// import { WishlistContext } from '../../src/WishlistContext';
const Home = () => {

  const [shop, setShop] = useState([])
  // const { toggleWishlist } = useContext(WishlistContext
  // )

  const getMenu= async () => {
    try {
        const res = await axios(`${BASE_URL}`)
  
        setShop(res.data.data)
        console.log(res.data.data);
        
        setShopCopy(res.data.data)
    } catch (error) {
        console.log(error);
    }
}


useEffect(() => {
    getMenu()
}, [])
  return (
    <>
     <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.title}>
          <p style={{fontSize:'20px', marginBottom:'10px'}}>Spring / Summer Collection 2017</p>
        <h1 style={{fontSize:'72px'}}>Get up to 30% Off </h1>
        <h1 style={{fontSize:'72px'}}>New Arrivals</h1>
        <button className={styles.btn}>Shop Now</button>
        </div>
      
      </div>
      <div className={styles.arriwals}>
      <Grid container spacing={2}>
  <Grid item xs={12} md={8} lg={4}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
    <button className={styles.button}>WOMEN'S</button>


  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
  <button  className={styles.button}>ACCESSORIES'S</button>
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
    <button  className={styles.button}>MEN'S</button>
 
  </Grid>
 
</Grid>
           
  
      </div>
      

      <div className={styles.shop}>
    <Grid container spacing={2}>
        {
            shop.length > 0 && shop.map((m) => {
                return (<Grid size={{ xs: 12, md: 6, lg: 3 }} key={m._id}>
                    <div className={styles["shop"]}>
                        <img src={m.imageUrl} alt={m.title} />
                      <div className="shop">  <h3 className={styles.title}>{m.name}</h3>
                      <h3 className={styles.title}>{m.title}</h3></div>
                        <p className={ styles.price}>${m.price} </p>

                        <div style={{ display: "flex", gap: "1rem" }}>
                            <Link to={`/${m._id}`}><FaInfoCircle /></Link>
                            <FaRegHeart onClick={() => { toggleWishlist(m) }} />
                        </div>



                        
                   
                       
                    </div>
                </Grid>)
            })
        }
    </Grid>

</div>
<div className={styles.man}>


</div>
 
   
      <div className={styles.latest}>
        <h1 style={{paddingBottom:'100px'}}>Latest Blogs</h1>
        <Grid container spacing={2}>
  <Grid item xs={12} md={8} lg={4}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
     


  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />

  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />

 
  </Grid>
 
</Grid>
      </div>


     </div>
     
     <div className={styles.man}>
     <Grid container spacing={30}>
  <Grid item xs={12} md={6} lg={6}>
    <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png" alt="" />
     


  </Grid>
  <Grid item xs={12} md={6} lg={6}>
    <h1 style={{paddingTop:'100px'}}>Deal Of The Week</h1>
    <div className={styles.button}>
    <button >2</button>
    <button>23</button>
    <button>51</button>
    <button>25</button>

    
    </div>



  </Grid>
 
 
</Grid>
     </div>

    </>
  )

 
}

export default Home