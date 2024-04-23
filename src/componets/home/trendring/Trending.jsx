import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import '../../../assets/Fonts/Maxwell/maxwell.css'
import '../../../assets/Fonts/Tisa/Tisa.css'
const trending_list = ['Bussines','Numbers','Money','People','Interpol','Deutsche Bank','FBI','Scotland Yard','CIA','KGB','Metropolis','Kojima','Boca','Hee Hee','Elon Musk', 'Buckethead']

const Trending = () => {
    const trending_sx = {
        layout: {
            padding:'10px',
            height:'70%',
            display:'flex',
            flexDirection:'column',
            gap:'30px',
            backgroundColor:'#4e3c5a',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)'

        },
        trending_title: {
            display:'flex',
            padding:'10px',
            border: '2px solid black',
            backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/03/43/11/52/1000_F_343115242_jgrVUf48bhoCwxRCuFG88PA1AldvxFKX.jpg')",
            justifyContent:'center',

        },
        trending_typo:{
            fontFamily:'Maxwell-Bold',
            fontSize:{md:'35px'},
            letterSpacing:{md:'1px'},
            color:'#e6e5e5',
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
        trending_item_typo:{
            border: '1px solid #e6e5e5',
            padding:'5px',
            color:'#e6e5e5',
            fontFamily: 'Tisa Sans Pro Regular',
            fontSize:{md:'20px'},
            paddingLeft:{md:'20px'},
            cursor:'pointer',
            filter: 'brightness(60%)',
            transition: 'filter 0.3s',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',// Agrega una transición suave
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)',
            "&:hover": {
                filter: 'brightness(100%)', // Ajusta el brillo al pasar el mouse
            },



        },



    }



    return(
        <Box sx={{...trending_sx.layout}}>
            <Box sx={{...trending_sx.trending_title}}>
                <Typography sx={{...trending_sx.trending_typo}} >Trending Universe</Typography>
            </Box>
            <Box sx={{...trending_sx.treding_list}}>
                <Grid container sx={{gap:{md:'10px'}}}>
                    {
                        trending_list.map(
                            ( trending, i) => (
                                <Grid item key={i} xs={12}>
                                    <Typography sx={{...trending_sx.trending_item_typo}}>{trending}</Typography>
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default  Trending;