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
                px: { xs: 3, sm: 5, md: 10 },
                py: { xs: 4, sm: 6 },
            }}
        >
            <Grid container spacing={4} justifyContent="center" alignItems="flex-start" textAlign={{ xs: "center", sm: "left" }}>

                {/* Logo e información */}
                <Grid item xs={12} sm={6} md={4}
                    textAlign={{ xs: "center", sm: "left" }}
                >
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: 1, 
                        marginBottom: "10px",
                        justifyContent: { xs: "center", sm: "flex-start" }
                    }}>
                        
                        <img src="/CoffeKode.png" alt="CoffeeKode Logo" style={{ width: 80, height: 80 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "Fraunces" }}>
                            CoffeeKode
                        </Typography>
                    </Box>

                    <Typography variant="body2" sx={{
                        color: "text.secondary",
                        fontSize: { xs: "14px", sm: "15px" },
                        maxWidth: "300px",
                        mx: { xs: "auto", sm: 0 }
                    }}>
                        Café de especialidad tostado artesanalmente para ofrecer una experiencia única
                        con sabores profundos y auténticos.
                    </Typography>
                </Grid>

                {/* Enlaces */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" sx={{
                        fontWeight: 500,
                        marginBottom: "10px",
                        fontSize: { xs: "15px", sm: "16px" },
                        textAlign: { xs: "center", sm: "left" }
                    }}>
                        Enlaces
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", alignItems: { xs: "center", sm: "flex-start" } }}>
                        <Link href="#" underline="none" color="inherit">Inicio</Link>
                        <Link href="#" underline="none" color="inherit">Tienda</Link>
                        <Link href="#" underline="none" color="inherit">Contacto</Link>
                        <Link href="#" underline="none" color="inherit"></Link>
                    </Box>
                </Grid>

                {/* Redes sociales */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" sx={{ 
                        fontWeight: 500, 
                        marginBottom: "10px", 
                                                    fontSize: { xs: "15px", sm: "16px" },
                            textAlign: { xs: "center", sm: "left" }
                    }}>
                        Síguenos
                    </Typography>

                    <Box sx={{ 
                        display: "flex", 
                        gap: 1, 
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}>
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
