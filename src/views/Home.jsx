import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PostMaker from "../componets/home/post/PostMaker.jsx";
import Trending from "../componets/home/trendring/Trending.jsx";

const layout_sx = {
    grid_container:{
        marginTop:'0px',
        marginLeft:'0px',
        padding:'10px',
        justifyContent:'center',
        height:{xs:'1000px',md:'1500px'},
        backgroundColor:'#422c80'

    },
    grid_item_1:{

        margin:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    grid_item_2:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'10px',
    },
    grid_item_3:{

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'10px',
    },
};

const item_sx = {
    item_layout:{

        height:'95%',
        width:'90%',

        padding:'5px',
    },
    item_1:{

    },
};


export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 , height:'2000px',width:'100%'}}>
            <Grid container  sx={{ ...layout_sx.grid_container}}>
                <Grid item xs={2.6}  sx={{...layout_sx.grid_item_1}}> {/* Cambiado de xs={8} a xs={6} */}
                    <Box sx={{...item_sx.item_layout,}}>

                    </Box>

                </Grid>
                <Grid item xs={6}  sx={{...layout_sx.grid_item_2}}> {/* Cambiado de xs={4} a xs={6} */}
                    <Box sx={{...item_sx.item_layout, display:'flex', justifyContent:'center'}}>
                        <PostMaker></PostMaker>
                    </Box>
                </Grid>
                <Grid item xs={2.6}  sx={{...layout_sx.grid_item_3}}> {/* Cambiado de xs={4} a xs={6} */}
                    <Box sx={{...item_sx.item_layout,}}>
                            <Trending></Trending>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
