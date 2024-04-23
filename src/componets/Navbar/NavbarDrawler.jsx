import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, MenuItem} from "@mui/material";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {SvgIcon} from '@mui/material';
import RocketIcon from "../../assets/icons/RocketIcon.jsx";
const NavbarDrawler = ({arrayNavLinks, setOpen,style}) => {
    return(
        <Box sx={{width:'150px', heigth:'100%',}}>
            <nav>
                <List>

                    <Button onClick={() => setOpen(false)} >Cerrar</Button>
                    {
                        arrayNavLinks.map((item, i) => (
                            <>
                                <ListItem key={i} sx={{paddingLeft:'0',paddingRight:'0'}}>
                                    <MenuItem   component={NavLink} to = {'/'}  sx={{ display:'flex',justifyContent:'start',width:'100%',padding:'0'}}>
                                        <Typography sx={{...style.typography_item}}>{item}</Typography>
                                    </MenuItem>
                                </ListItem>
                            </>
                        ))
                    }
                </List>
            </nav>
        </Box>
    );
}

export default NavbarDrawler;