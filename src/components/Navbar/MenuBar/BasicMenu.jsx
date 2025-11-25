import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    my: 2,
                    color: "#344E41",
                    // display: 'block',
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2px",
                    "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        color: "#6B8E23",
                    },
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "16px"
                }}
            >
                ¿Quiénes somos?
                <ArrowDropDownIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                < Link to="/quienes-somos/preguntas-frecuentes" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>Preguntas frecuentes</MenuItem>
                </Link>
                < Link to="/quienes-somos/nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>Sobre Nosotros</MenuItem>
                </Link>
                < Link to="/quienes-somos/tyc" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>Términos y Condiciones</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
