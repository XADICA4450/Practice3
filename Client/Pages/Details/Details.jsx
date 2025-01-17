import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../src/constans";
import Grid from '@mui/material/Grid2';
import { Container } from "@mui/material";


const Details = () => {

    const [menu, setMenu] = useState(null)
    const { id } = useParams()


    const getMenu = async () => {
        try {
            const res = await axios(`${BASE_URL}/${id}`)
            setMenu(res.data.data)
            console.log(res.data.data);

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        if (id) {
            getMenu()
        }


    }, [])




    return (
        <>
            {menu ? <Container>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <img src={menu.imageUrl} alt={menu.title} width={400} />
                    </Grid>
                    <Grid size={6} style={{ display: "flex", flexDirection: 'column', gap: "1rem", justifyContent: "center" }}>
                        <h3>title: {menu.title}</h3>
                      
                        <p>Price: $ {menu.price}</p>
                    </Grid>

                </Grid>
            </Container > : <h2>no such product!</h2>
            }
        </>
    )
}

export default Details