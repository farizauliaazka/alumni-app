import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IMG from '../../assets/gambar3.png'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Card, styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase'
import {Link} from 'react-router-dom'


const Img = styled('img')({
    margin:"auto",
    display:"block",
    maxWidth:"auto",
    maxHeight:"auto"
  })

const drawerWidth = 258;
let dataAssessment = [
    {      
      image:IMG,
      title:"Basic Leadership Skill",
      subtitle:"Keterampilan Kepemimpinan Dasar",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.."
    }
] 

const detailTraining = () => {
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            elevation={0}
            position="fixed"
            sx={{
              borderBottom:'10px',
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{background:"white"}}>
              <Typography sx={{color:"#252b42"}} variant="h6" noWrap component="div">
                Leadership Skill
              </Typography>
            </Toolbar>
          </AppBar>
            <Grid container sx={{mt:5}} style={{backgroundColor:"#ECECEC", height:"100vh", width:'100%'}}>
                <Grid item md={8} alignItems='center' sx={{ p:"35px", ml:'15rem'}}>              
                {
                    dataAssessment.map((item,index)=>(
                <Box sx={{ml:-1.5, mt:"-10px"}}>
                    <Box sx={{width:792}}>
                        <Img alt="kerja" src={item.image}/>
                    </Box>
                    <Box sx={{mt:7, width:450, ml:"35px"}}>
                        <Box>
                            <Typography sx={{fontSize:20}}><b>{item.title}</b></Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:"grey"}} sx={{fontSize:15}}>{item.subtitle}</Typography>
                        </Box>
                        <Box sx={{mt:"4px"}}>
                            <Typography sx={{fontSize:14}}>{item.desc}</Typography>
                        </Box>
                    </Box>
                </Box>
                    ))
                }      
            </Grid>
            </Grid>
            <Grid item md={6} sx={{position:'fixed', height:'100vh',px:"36px",py:"45px", backgroundColor:'white', ml:'66rem'}}>
    <Box sx={{mt:8}}></Box>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, mt: 3, height: 40, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, }}
          placeholder="Pencarian"
          inputProps={{ 'aria-label': 'Pencarian' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{mt:"38px"}}>
        <Typography sx={{fontSize:20}}><b>Filter</b></Typography>
      </Box>
      <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"black"}}>Diurutkan berdasarkan</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
      <Box sx={{mt:"5px", width:"100px", height:"100px"}}>
        <FormControlLabel value="terbaru" control={<Radio />} label="Terbaru" />
        <FormControlLabel value="terpopuler" control={<Radio />} label="Terpopuler" />
      </Box>
      </RadioGroup>
    </FormControl>
    </Box>
    <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"black"}}>Harga</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
       <Box sx={{mt:"5px", height:"100px",width:"100px"}}>
        <FormControlLabel value="gratis" control={<Radio />} label="Gratis" />
        <FormControlLabel value="berbayar" control={<Radio />} label="Berbayar" />
      </Box>
      </RadioGroup>
    </FormControl>
    </Box>
    </Grid>
        </Box> 
        
        
        
    );
}

export default detailTraining
