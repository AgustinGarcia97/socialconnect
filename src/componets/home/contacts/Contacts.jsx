import {Box, Icon} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Offline, Online} from "../../../assets/icons/contactstatus/ContactStatus.jsx";

const contact_list = [
    {
        friend: 'friend1',
        status:'on'
    },
    {
        friend: 'friend2',
        status:'of'
    },
    {
        friend: 'friend3',
        status:'of'
    },
    {
        friend: 'friend4',
        status:'on'
    },
    {
        friend: 'friend5',
        status:'on'
    },
    {
        friend: 'friend6',
        status:'of'
    },
    {
        friend: 'friend7',
        status:'on'
    },

]

const Contacts = () => {
    const trending_sx = {
        layout: {
            padding: '10px',
            height: 'auto',
            display: {xs:'none',md:'flex'},
            flexDirection: 'column',
            gap: '30px',
            backgroundColor: '#4e3c5a',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)'

        },
        trending_title: {
            display: 'flex',
            padding: 'px',
            backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/03/43/11/52/1000_F_343115242_jgrVUf48bhoCwxRCuFG88PA1AldvxFKX.jpg')",
            justifyContent: 'center',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.4)'

        },
        trending_typo: {
            fontFamily: 'Maxwell-Bold',
            fontSize: {md: '30px'},
            letterSpacing: {md: '1px'},
            color: '#e6e5e5',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)'
        },
        treding_list:{
            padding: '10px',
            border: '2px solid black',
            backgroundImage: "url('https://w0.peakpx.com/wallpaper/986/611/HD-wallpaper-galax-dark-galaxy.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            color: 'white',
        },
        contact_box_friend:{
            fontSize:{md:'20px'},
            gap:{md:'5px'},
            cursor:'pointer',


            border: '1px solid #3c3a3a',
            width:{md:'70%'},
            display:"flex",
            alignItems:'center',
            justifyContent: 'start',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',// Agrega una transición suave
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)',

        },
        contact_item_typo:{

            padding:'5px',
            color:'#e6e5e5',
            fontFamily: 'Tisa Sans Pro Regular',

        },
    }




        return(
        <Box sx={{...trending_sx.layout}}>
            <Box sx={{...trending_sx.trending_title}}>
                <Typography sx={{...trending_sx.trending_typo}} >Contacts</Typography>
            </Box>
            <Box sx={{...trending_sx.treding_list}}>
                <Grid container sx={{gap:{md:'10px'}}}>
                    {
                        contact_list.map(
                            ( contact, i) => (
                                <Grid item key={i} xs={12} sx={{display:'flex', }}>
                                    <Box sx={{...trending_sx.contact_box_friend}}>
                                        {contact.status === 'on'?
                                            <Icon sx={{marginLeft:'10px'}}>
                                                <Online></Online>
                                            </Icon>
                                             :
                                            <Icon sx={{marginLeft:'10px'}}>
                                                <Offline></Offline>
                                            </Icon>
                                           }
                                        <Typography sx={{...trending_sx.contact_item_typo}}>{contact.friend}</Typography>


                                    </Box>
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Box>

        </Box>
    );
}

export default Contacts