import { Box, Container, Grid, Typography } from "@mui/material";
import CardProduct from "../../../components/Cards/CardProduct";

import productsData from "./productsData.js";
import Logo from "/CoffeKode.png";

function Products() {
    return (
        <section>
            < Container maxWidth="lg">
                < Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <img
                        src={Logo}
                        alt="Coffee Beans Top View"
                        width={80}
                        height={80}
                    />
                    <Typography variant="h1" gutterBottom
                        sx={{ 
                            fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold", 
                            textAlign: "center", 
                            m: 5,
                            fontFamily: 'montserrat',
                            
                        }}
                    >
                        CoffeeKode
                    </Typography>
                </Box>
                {/* SUBTÍTULO / DESCRIPCIÓN */}
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ 
                        maxWidth: "700px", 
                        mb: 5,
                        fontFamily: 'montserrat',
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                        fontWeight: "600",
                        textAlign: "center",
                        margin: "0 auto 2rem auto",
                    }}
                >
                    Café hecho con pasión, tradición y un toque especial.
                    Inspirado en las raíces y sabores de México.
                    Cada variedad tiene una historia que contar.
                </Typography>
                < Grid container spacing={3} justifyContent="center" >
                    {productsData.map((product, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <CardProduct
                                key={index}
                                image={product.image}
                                title={product.title}
                                description={product.description}
                                buttonText={product.buttonText}
                            />
                        </Grid>
                    ))}
                </ Grid >
            </ Container>
        </section>
    )
}

export default Products;