import { Box, Container } from "@mui/material";
import EmblaCarousel from "../../../components/Carrousel/EmblaCarousel";
import kit01 from '../../../assets/Descuento.jpg';
import kit02 from '../../../assets/Kits.jpg';

const OPTIONS = { loop: true }
const SLIDES = [
    kit01,
    kit02
]

function BannerKits() {
    return(
        < Container mb={5} maxWidth="lg" 
            sx={{ 
                textAlign: "center", 
                marginTop: "50px" 
            }}>
            <h2>Nuestros Kits de cumpleaños</h2>
            < Box component="section"
                sx={{
                    width: "80%",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginTop: "30px"
                }}
            >
                < EmblaCarousel slides={SLIDES} options={OPTIONS}/>
            </Box>
        </Container>
    )
}

export default BannerKits;