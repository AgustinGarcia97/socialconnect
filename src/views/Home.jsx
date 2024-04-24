import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PostMaker from "../componets/home/post/PostMaker.jsx";
import Trending from "../componets/home/trendring/Trending.jsx";
import Contacts from "../componets/home/contacts/Contacts.jsx";
import  {Post,PostLayout} from "../componets/home/post/Post.jsx";
import {Divider} from "@mui/material";

const layout_sx = {
    grid_container:{
        marginTop:'0px',
        marginLeft:'0px',
        padding:'10px',
        justifyContent:'center',
        height:{xs:'auto',md:'auto'},



    },
    grid_item_1:{

        margin:'10px',
        display: {xs:'none',md:"flex"},
        justifyContent:'center',

    },
    grid_item_2:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'10px',

    },
    grid_item_3:{

        display: {xs:'none',md:"flex"},
        justifyContent:'center',
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
        <Box sx={{ flexGrow: 1 , height:'auto',width:'100%', backgroundImage:'url("https://images.wallpapersden.com/image/download/new-kurzgesagt-black-hole-art-minimalist_bG1pbmeUmZqaraWkpJRsa21lrWloZ2U.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

        }}>
            <Grid container  sx={{ ...layout_sx.grid_container}}>

                <Grid item xs={2.6}  sx={{...layout_sx.grid_item_1}}>
                    <Box sx={{...item_sx.item_layout,}}>
                        <Contacts></Contacts>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}  sx={{...layout_sx.grid_item_2}}>
                    <Box sx={{...item_sx.item_layout, display:'flex', flexDirection:'column', alignItems:'center',gap:'30px',height:'auto'}}>
                        <PostMaker></PostMaker>
                        <Divider sx={{border:'1px solid grey', width:'100%'}}></Divider>
                        <PostLayout></PostLayout>
                    </Box>
                </Grid>

                <Grid item xs={2.6}  sx={{...layout_sx.grid_item_3}}>
                    <Box sx={{...item_sx.item_layout,}}>
                        <Trending></Trending>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
