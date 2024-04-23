import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, MenuItem} from "@mui/material";

import {useState} from "react";
import NavbarDrawler from "./NavbarDrawler.jsx";
import RocketIcon from "../../assets/icons/RocketIcon.jsx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../assets/Fonts/Inter/Inter.css';
import '../../assets/Fonts/Maxwell/maxwell.css';
const styles_sx = {
        layout_appbar:{
            justifyContent:{xs:'space-between', md:'space-between' },
            alignItems:'center',
            backgroundColor:'rgba(9,1,28,0.75)',
            height:'60px',
            padding:'10px',


            },
        logo_navbar:{
            display:'flex',
            width:{xs:'auto',md:'20%'},
            justifyContent:'start',
            alignItems:'center',
            gap:{xs:'auto',md:'10px'},

        },

        logo_typo:{
            fontFamily: 'Maxwell-Bold',
            fontSize:{xs:'15px',md:'25px'},

        },

        item_navbar:{
            display:{xs:'none',md:'flex'},
            justifyContent:{xs:'space-around', alignItems:'center'},
            gap:{xs:'20px'},
            backgroundColor:'rgba(37,0,123,0.75)',
            width:{xs:'40%',xl:'30%'},
            height:{xs:'70%'},
            marginRight:'310px',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',
            padding:'5px',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)'
    },
    menu_item : {
        width:{xs:'33%'},
    },
    typography_item:{
            textAlign:'center',
            width:{xs:'100%'},
            fontFamily:'Inter',
            color:'white',
    }
}

const item_navbar = ['Home', 'Public','Friends']




export default function Navbar() {
    const [open, setOpen] = useState(false);
    const height = "10px";
    const width = "10px";
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{...styles_sx.layout_appbar}}>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 , display:{lg:'none'}}}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>



                    <Box sx={{...styles_sx.logo_navbar}}>
                        <IconButton >
                            <RocketIcon></RocketIcon>
                        </IconButton>
                        <Typography sx={{...styles_sx.logo_typo}}>Social Connect</Typography>
                    </Box>


                    <Box sx={{display:{xs:"flex"},width:'75%',justifyContent:'center',}}>


                        <Box sx={{...styles_sx.item_navbar}}>
                            {
                                item_navbar.map((item, i) => (

                                    <MenuItem sx={{...styles_sx.menu_item,height:'100%'}}>
                                        <Typography sx={{...styles_sx.typography_item}}>{item}</Typography>
                                    </MenuItem>


                                ))
                            }
                        </Box>
                    </Box>
                    <IconButton sx={{ padding:'0'}}>
                        <AccountCircleIcon
                            style={{
                                fontSize:45,
                                backgroundColor:'#8d2cb1',
                                borderRadius: '50%',}}
                        ></AccountCircleIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{
                    display:{xs:'flex',sm:'none'},
                    '& .MuiDrawer-paperAnchorLeft': {
                            backgroundColor:'rgb(37,0,123)',
                    },
                        "& > .MuiBackdrop-root":{
                         display: 'none',
                        }
            }}
            >
                <NavbarDrawler arrayNavLinks={item_navbar} setOpen={setOpen} style = {styles_sx}/>
            </Drawer>
        </Box>
    );
}
