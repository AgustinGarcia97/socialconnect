import { useState } from 'react'


import Navbar from "./componets/Navbar/Navbar.jsx";
import {Route, Router, Routes,} from "react-router-dom";
import {Box, Container} from "@mui/material";
import Home from "./views/Home.jsx";
import Footer from "./componets/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)
    const app_sx = {
      grid_container:{
          backgroundImage : "url('./src/assets/images/homewallpaper.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
      }
    }
  return (
        <>

         <Navbar color="inherit"></Navbar>

          <Container  maxWidth={false} disableGutters sx={{...app_sx.grid_container}} >

          <Routes>
              <Route path={"/"} element={<Home/>}/>
          </Routes>
        </Container>
            <Footer></Footer>

        </>




  )
}

export default App
