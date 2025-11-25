import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#F4D58D",
                padding: "50px 20px 20px 20px",
            }}
        >
            <Grid container spacing={4} justifyContent="center" alignItems="flex-start">

                {/* Logo e información */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "10px" }}>
                        {/* Reemplaza este <CoffeeIcon> por tu logo real */}
                        <img src="/CoffeKode.png" alt="CoffeeKode Logo" style={{ width: 80, height: 80 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "Fraunces" }}>
                            CoffeeKode
                        </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ 
                        color: "text.secondary", 
                        fontSize: "14px", 
                        marginRight: "20px" 
                    }}>
                        Café de especialidad tostado artesanalmente para ofrecer una experiencia única
                        con sabores profundos y auténticos.
                    </Typography>
                </Grid>

                {/* Enlaces */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px" }}>
                        Enlaces
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px" }}>
                        <Link href="#" underline="none" color="inherit">Inicio</Link>
                        <Link href="#" underline="none" color="inherit">Tienda</Link>
                        <Link href="#" underline="none" color="inherit">Contacto</Link>
                        <Link href="#" underline="none" color="inherit"></Link>
                    </Box>
                </Grid>

                {/* Redes sociales */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px" }}>
                        Síguenos
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                            href="#"
                            color="inherit"
                            sx={{ backgroundColor: "#fff", borderRadius: "50%", boxShadow: 1 }}
                        >
                            <InstagramIcon />
                        </IconButton>

                        <IconButton
                            href="#"
                            color="inherit"
                            sx={{ backgroundColor: "#fff", borderRadius: "50%", boxShadow: 1 }}
                        >
                            <FacebookIcon />
                        </IconButton>

                        <IconButton
                            href="#"
                            color="inherit"
                            sx={{ backgroundColor: "#fff", borderRadius: "50%", boxShadow: 1 }}
                        >
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Línea inferior */}
            <Box
                sx={{
                    marginTop: "40px",
                    textAlign: "center",
                    paddingTop: "15px",
                    borderTop: "1px solid #ddd",
                }}
            >
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    © {new Date().getFullYear()} CoffeeKode · Todos los derechos reservados.
                </Typography>
            </Box>
        </Box>
    );
}
