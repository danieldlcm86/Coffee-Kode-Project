import {  Grid } from "@mui/material";
import CardProduct from "../../../components/Cards/CardProduct";

import kitProductsData from "./kitsProductsData.js";

const styleContainer = {
    padding: "50px",
}

function KitsProducts() {
    return (
        <section style={styleContainer}>
            < Grid container spacing={3} justifyContent="center" mt={0} p={5}
                sx={{
                    backgroundColor: "#344E41",
                }}
            >
                {kitProductsData.map((product, index) => (
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
        </section>
    )
}

export default KitsProducts