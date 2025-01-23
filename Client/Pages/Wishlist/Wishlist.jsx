import { useContext } from "react";

import Grid from '@mui/material/Grid2';

import styles from "./wishlist.module.scss"
import { WishlistContext } from "../../src/WishlistContext";

import { FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet-async";




const Wishlist = () => {



    const { wishlist, toggleWishlist } = useContext(WishlistContext)






    return (

        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="shop page" />
            </Helmet>
            <div>


                <div className="container">


                    <div className={styles.shop}>
                        <Grid container spacing={2}>
                            {
                                wishlist.length > 0 && wishlist.map((m) => {
                                    return (<Grid size={{ xs: 12, md: 6, lg: 4 }} key={m._id}>
                                        <div className={styles["shop"]}>
                                            <img src={m.imageUrl} alt={m.title} />
                                            <h3 className={styles.title}>{m.title}</h3>
                                            <p> {m.oldPrice ? <span className={styles["old-price"]}>$ {m.oldPrice}</span> : ""} $ {m.price}</p>
                                          
                                           
                                            <div style={{ display: "flex", gap: "1rem" }}>
                                                <FaRegHeart onClick={() => { toggleWishlist(m) }} />
                                            </div>
                                        </div>
                                    </Grid>)
                                })
                            }
                        </Grid>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Wishlist