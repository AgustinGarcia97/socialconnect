import {Box} from "@mui/material";
import MinHeightTextarea from "./MinHeightTextarea.jsx";
import '../../../assets/Fonts/Tisa/Tisa.css'

import Typography from "@mui/material/Typography";
const PostMaker = (props) => {
    const post_sx = {
        postMaker_layout: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height:{xs:'130px',md:'170px'},
            width: {xs:'100%',md:'80%'},
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.4)'


        },
        postMaker_box1:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width:'100%',
            backgroundColor:'#4e3c5a',
            height: {xs:'90px',md:'109.5px'},

            borderLeftRadius:'30px',
            borderRightRadius:'30px',
            borderTopLeftRadius:'30px',
            borderTopRightRadius:'30px',
        },
        postMaker_box2:{
            display: 'flex',
            justifyContent: 'center',
            width:'100%',
            gap:'20px',
            backgroundColor:'black',
            height:{xs:'40px', md:'60px'},
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            borderLeftRadius:'30px',
            borderRightRadius:'30px',



        },
        box2_mediaTypo:{
            width: {xs:'30%',md: '30%'},
            height:{xs:'50%',md: '50%'},
            backgroundColor:'#2e2a33',
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
            fontSize : {xs:'12px',md:'14px'},

        }
    }

    return(
        <Box sx={{...post_sx.postMaker_layout}}>
            <Box sx={{...post_sx.postMaker_box1}}>
                <MinHeightTextarea ></MinHeightTextarea>
            </Box>
            <Box sx={{...post_sx.postMaker_box2}}>
                <Box sx={{width:'90%', display:'flex', flexDirection:'row', justifyContent:'space-around' ,gap:'10px', alignItems:'center'}}>
                    <Typography sx={{...post_sx.box2_mediaTypo,fontFamily:'Tisa Sans Pro Regular'}}>Add media</Typography>
                    <Typography sx={{...post_sx.box2_mediaTypo,fontFamily:'Tisa Sans Pro Regular'}}>Post</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default PostMaker;