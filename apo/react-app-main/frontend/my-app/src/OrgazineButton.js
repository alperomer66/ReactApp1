import { Box, Button, Stack, Typography,  } from "@mui/material";
import React from "react";
import homePage from "./home-page.jpg";


export default function OrgazineButton() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={5}
        sx={{ marginLeft: "1.5rem", marginTop: "3rem" }}

      >
     <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={homePage}
        alt="homePage"
        style={{ width: "800px", height: "400px", marginRight: "20px",marginTop:"25px" }}
      />
    
    </div>

        <Box
          sx={{
            width: 800,
            height: 400,
            backgroundColor: "#102444",//home page box color -- background set as main color ! //
            borderRadius: "30px",
            transform: 'translateY(0px)',
           
          }}
        >
          <Typography sx={{color: 'white', textAlign: 'right', fontSize: '50px',padding: '30px 50px 20px 30px'}}>
            Опознай България! 
            Избери следващата си дестинация.
          </Typography>
          <Button variant="outlined"  
          sx={
            {color: '#fff',
             marginLeft: '20rem',
             borderRadius: '90px',
             marginTop:'10px',
             fontSize:"16px",
             borderWidth: '5px',                                           ///problem  whit hover, pls solve it !
             borderColor: '#fff', 
          
             pointerEvents: 'visibleFill',
             
    
               }}>
          Организирай пътуването си
            </Button>
        </Box>
      </Stack>
    </div>
  );
}
