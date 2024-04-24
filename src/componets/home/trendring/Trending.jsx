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
            height:'auto',
            display:'flex',
            flexDirection:'column',
            gap:'30px',
            backgroundColor:'#a54bb1',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)'

        },
        trending_title: {
            display:'flex',
            padding:'5px',
            backgroundColor: '#ad89dd',
            justifyContent:'center',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.4)'

        },
        trending_typo:{
            fontFamily:'Maxwell-Bold',
            fontSize:{xs:'20px',md:'30px'},
            letterSpacing:{md:'1px'},
            color:'#e6e5e5',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)'
        },
        treding_list:{
            padding: '10px',

            backgroundColor: '#ad89dd',
            color: 'white',


        },
        trending_item_typo:{
            border: '1px solid #3c3a3a',
            padding:'5px',
            color:'#a54bb1',
            fontFamily: 'Tisa Sans Pro Regular',
            fontSize:{md:'15px'},
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