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

const pages = ['Tienda', 'Reseñas', 'Contáctanos'];

import './navbar.css';
import BasicMenu from './MenuBar/BasicMenu';


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
                <IconButton size="large" aria-label="mostrar 4 nuevos correos" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Mensajes</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="mostrar 17 nuevas notificaciones"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificaciones</p>
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
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="./CoffeKode.png"
                            sx={{ width: 70, height: 70, marginRight: 0 }}
                        />
                    </IconButton>
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
                    <Box ml={5} sx={{
                        flexGrow: 1, display: { xs: 'none', md: 'flex' }
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
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
                                {page}
                            </Button>
                        ))}
                        < BasicMenu />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="mostrar 4 nuevos correos" color="inherit">
                            <Badge badgeContent={4} color="warning">
                                <MailIcon sx={{ color: "#344E41" }} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="mostrar 17 nuevas notificaciones"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="warning">
                                <NotificationsIcon sx={{ color: "#344E41" }} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="cuenta del usuario actual"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle sx={{ color: "#344E41" }} />
                        </IconButton>
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
