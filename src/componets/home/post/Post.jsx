import {Box, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import '../../../assets/Fonts/Tisa/Tisa.css';
import '../../../assets/Fonts/Maxwell/maxwell.css';
import Grid from "@mui/material/Grid";
const Post = () => {

    const post_style = {
        post_layout:{
            display:'flex',
            justifyContent:'center',
            height:{md:'auto'},
            backgroundColor:'#a54bb1',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.9)',
            flexDirection:'column',
            gap:'10px',
            padding:{xs:'13px',md:'17px'},
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',
        },
        box_uno:{
            backgroundColor: '#ad89dd',
            display:'flex',
            flexWrap:'wrap',
            padding: {xs:'10px',md:'10px'},
            borderBottomLeftRadius:'20px',
            borderBottomRightRadius:'20px',
            borderLeftRadius:'20px',
            borderRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderTopRightRadius:'20px',
            gap:'5px',

        },
        actions_button:{
            width:{xs:'50%',md:'25%'},
            height:{xs:'90%',md:'60%'},
            backgroundColor:'#a54bb1',
            fontSize: {xs:'12px', md:"15px"},
            border:'1px solid #4e3c5a',
            display:'flex',
            color:'white',
            alignItems:'center',
            justifyContent:'center',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',
            cursor:'pointer',


        },
    }


    return(
        <Box sx={{...post_style.post_layout}}>
            <Box sx={{...post_style.box_uno}}>
                <Box sx={{width:{md:"90%"},display:'flex', gap:'10px', alignItems:'center', }}>
                    <Typography sx={{color:'white',fontFamily:'Tisa Sans Pro Regular',fontSize:'10px'}}>Foto</Typography>

                    <Typography sx={{color:'white',fontFamily:'Tisa Sans Pro Regular',fontSize:{xs:'14px',md:'20px'}}}>Nombre del usuario</Typography>
                </Box>

                <Box>
                    <Typography sx={{color:'white',fontFamily:'Tisa Sans Pro Regular',fontSize:{xs:'15px',md:'20px'}}}>Hora publicacion</Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#ad89dd',}}>
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px', padding: {xs:'5px',md:'7px'}}}>
                    <Typography sx={{padding: {xs:'5px',md:'10px'},backgroundColor: 'rgba(37,0,123,0.75)', color:'#fff', fontFamily:'Tisa Sans Pro Regular', fontSize:{xs:'10px',md:'13px'}}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor magna vel metus viverra,
                        vitae eleifend dolor ultricies. Morbi id est nec odio convallis fermentum. Nullam hendrerit placerat nisi,
                        id suscipit mi molestie ac. Proin suscipit nisl at nisi blandit, a mollis dolor consequat. Suspendisse potenti.
                        Nulla non pharetra turpis. Duis at velit sit amet metus vestibulum rhoncus non eget eros.

                    </Typography>
                    <Box sx={{display:'flex', justifyContent:'space-around',height:{md:"50px"}}}>
                        <Box sx={{width:'90%', display:'flex', flexDirection:'row', justifyContent:'center' ,gap:'10px', alignItems:'center'}}>
                            <Typography sx={{...post_style.actions_button}}>Comment</Typography>
                            <Typography sx={{...post_style.actions_button}}>Share</Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

const PostLayout = () => {
    const length = 4; // Longitud de la secuencia
    const sequence = Array.from({ length }, (_, index) => index + 1);
    const layout= {
        title_box:{
            display: 'flex',
            backgroundColor: '#ad89dd',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',
            justifyContent:'center',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)',

        },
        title: {
            fontFamily:'Maxwell-Bold',
            color:'#fff',
            fontSize: {xs:'20px',md:'30px'}
        },

    }
    return(
        <Grid container sx={{display: 'flex', flexDirection:'row', justifyContent:'center', gap:'30px'}}>
            <Grid item xs={10} >
                <Box sx={{...layout.title_box}}>
                    <Typography sx={{...layout.title}}>Timeline</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={10} sx={{display:'flex', flexDirection:'column', gap:'40px'}}>
                {sequence.map((item, index) => (
                    <Post key={index}></Post>
                ))}
            </Grid>

        </Grid>
    )
}

export  {Post, PostLayout};