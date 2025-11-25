import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
    { name: "Tienda", path: "/tienda" },
    { name: "Reseñas", path: "/resenas" },
    { name: "Contáctanos", path: "/contacto" },
];


import './navbar.css';
import BasicMenu from './MenuBar/BasicMenu';
import { Link } from 'react-router';


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="Productos en carrito" color="inherit">
                    <Badge badgeContent={2} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Carrito</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="cuenta del usuario actual"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Perfil</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" component="nav" sx={{
                backgroundColor: '#F4D58D'
            }} >
                <Toolbar>
                    < Link to="/">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="./CoffeKode.png"
                                sx={{ width: 70, height: 70, marginRight: 0 }}
                            />
                        </IconButton>
                    </ Link>
                    < Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                color: "#344E41",
                                fontFamily: "'Fraunces', serif",
                                fontWeight: 500,
                                fontStyle: "normal"
                            }}
                        >
                            CoffeeKode
                        </Typography>
                    </Link>
                    <Box ml={5} sx={{
                        flexGrow: 1, display: { xs: 'none', md: 'flex' }
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                // onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "#344E41",
                                    display: 'block',
                                    textTransform: "none",
                                    fontFamily: "'Fraunces', serif",
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                        boxShadow: "none",
                                        color: "#6B8E23",
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                        < BasicMenu />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" 
                            aria-label="Productos en carrito" 
                            color="inherit">
                            <Badge badgeContent={2} color="warning">
                                <ShoppingCartIcon fontSize='medium' sx={{ color: "#344E41" }} />
                            </Badge>
                        </IconButton>
                        < Link to="/iniciar-sesion">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="cuenta del usuario actual"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle fontSize='medium' sx={{ color: "#344E41" }} />
                            </IconButton>
                        </ Link>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="mostrar más"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
