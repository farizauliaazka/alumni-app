import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
// import LogoutIcon from '@mui/icons-material/Logout';
import IMG from '../../assets/bigdata.png'
import IMG2 from '../../assets/loginusa.png'
import IMG3 from '../../assets/brilyan.png'
import IMG4 from '../../assets/unimasi.png'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import { Card, styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase'
import {Link} from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Pagination from './components/pagination'
import Stack from '@mui/material/Stack'


const Img = styled('img')({
    margin:"auto",
    display:"block",
    maxWidth:"auto",
    maxHeight:"auto"
  })
  const drawerWidth = 258;
  export default function ResponsiveDrawer() {
    let dataAssessment = [
        {
            title:"PT Big Data Indonesia",
            subtitle:"IT Technical Support",
            contact:"Contact",
            subcontact:"+62-8888-8888",
            address:"Alamat",
            subaddress:"Graha Kerama Yudha Lt.4 Unit B,",
            subaddressII:"Jakarta Selatan",
            image:IMG,
            title2:"CV Teknologi Nusantara",
            subtitle2:"IT Development Staff",
            contact2:"Contact",
            subcontact2:"+62-8888-8888",
            address2:"Alamat",
            subaddress2:"Ruko Pasar Alam, Jalan Alun-Alun Selatan No.46, Kota Bekasi, Jawa Barat.",
            image2:IMG2,
            title3:"PT Brilyan Trimatra Utama",
            subtitle3:"IT Staff",
            contact3:"Contact",
            subcontact3:"+62-8888-8888",
            address3:"Alamat",
            subaddress3:"Jalan Dahlia Raya Blok E Nomor 12, Kemang Pratama 2, Kota Bekasi, Jawa Barat.",
            image3:IMG3,
            title4:"PT Unimasi Media Kreasi",
            subtitle4:"GRAPHIC DESIGN",
            contact4:"Contact",
            subcontact4:"+62-8888-8888",
            address4:"Alamat",
            subaddress4:"Jalan Dahlia Raya Blok E Nomor 12, Kemang Pratama 2, Kota Bekasi, Jawa Barat.",
            image4:IMG4
        }
    ]

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
                List Perusahaan
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container sx={{mt:5}} style={{backgroundColor:"#ECECEC", height:'100%', width:'100%'}}>
            <Grid item md={8} alignItems='center' sx={{ p:"50px", ml:'18rem'}}>
                {
                    dataAssessment.map ((item,index) =>(
                        <Box sx={{p:"10px"}}>
                            <Card sx={{height:"220px", width:"520px", ml:"-50px"}}>
                                <Box>
                                    <Img alt="kerja" src={item.image} sx={{width:"225px", ml:"30px", mt:"20px"}} />
                                </Box>
                                <Box>
                                    <Typography style={{color:"blue"}} sx={{ml:"330px", mt:"-55px", fontSize:14}}>{item.subtitle}</Typography>
                                    <Typography sx={{ml:"330px", mt:"5px",fontSize:14}}><b>{item.title}</b></Typography>
                                    <Typography sx={{ml:"30px", mt:"50px",fontSize:12}}><b>{item.address}</b></Typography>                            
                                </Box>
                                <Box sx={{}}>
                                    <Typography sx={{ml:"28px",fontSize:12, mt:"10px"}}>{item.subaddress}</Typography>
                                    <Typography sx={{ml:"28px",fontSize:12}}>{item.subaddressII}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{fontSize:12, ml:"330px", mt:"-65px"}}><b>{item.contact}</b></Typography>
                                    <Typography sx={{fontSize:12, ml:"330px", mt:"10px"}}>{item.subcontact}</Typography>
                                </Box>
                            </Card>
                            <Card sx={{height:"220px", width:"520px", ml:"-50px", mt:5}}>
                              <Box>
                                <Img alt="kerja" src={item.image2} sx={{width:"180px", ml:"30px", mt:"20px"}} />
                              </Box>
                              <Box sx={{mt:"-20px"}}>
                                <Box>
                                      <Typography style={{color:"blue"}} sx={{ml:"330px", mt:"-70px", fontSize:14}}>{item.subtitle2}</Typography>
                                      <Typography sx={{ml:"330px", mt:"3px",fontSize:14}}><b>{item.title2}</b></Typography>
                                      <Typography sx={{ml:"30px", mt:"45px",fontSize:12}}><b>{item.address2}</b></Typography>                            
                                  </Box>
                                  <Box sx={{}}>
                                      <Typography sx={{ml:"28px",fontSize:12, mt:"5px", width:"200px"}}>{item.subaddress2}</Typography>
                                      <Typography sx={{ml:"28px",fontSize:12}}>{}</Typography>
                                  </Box>
                                  <Box>
                                      <Typography sx={{fontSize:12, ml:"330px", mt:"-79px"}}><b>{item.contact}</b></Typography>
                                      <Typography sx={{fontSize:12, ml:"330px", mt:"5px"}}>{item.subcontact}</Typography>
                                  </Box>
                                </Box>
                            </Card>
                            <Card sx={{height:"220px", width:"520px", ml:"-50px", mt:5}}>
                              <Box>
                                <Img alt="kerja" src={item.image3} sx={{width:"180px", ml:"30px", mt:"20px"}} />
                              </Box>
                                <Box>
                                      <Typography style={{color:"blue"}} sx={{ml:"330px", mt:"-70px", fontSize:14}}>{item.subtitle3}</Typography>
                                      <Typography sx={{ml:"330px", mt:"3px",fontSize:14, width:"150px"}}><b>{item.title3}</b></Typography>
                                      <Typography sx={{ml:"30px", mt:"35px",fontSize:12}}><b>{item.address3}</b></Typography>                            
                                  </Box>
                                  <Box sx={{}}>
                                      <Typography sx={{ml:"28px",fontSize:12, mt:"5px", width:"200px"}}>{item.subaddress3}</Typography>
                                  </Box>
                                  <Box>
                                      <Typography sx={{fontSize:12, ml:"330px", mt:"-79px"}}><b>{item.contact3}</b></Typography>
                                      <Typography sx={{fontSize:12, ml:"330px", mt:"5px"}}>{item.subcontact3}</Typography>
                                  </Box>
                            </Card>
                            <Card sx={{height:"220px", width:"520px", ml:"-50px", mt:5}}>
                              <Box>
                                <Img alt="kerja" src={item.image4} sx={{width:"100px", ml:"30px", mt:"20px"}} />
                              </Box>
                              <Box>
                                      <Typography style={{color:"blue"}} sx={{ml:"330px", mt:"-80px", fontSize:14}}>{item.subtitle4}</Typography>
                                      <Typography sx={{ml:"330px", mt:"3px",fontSize:14, width:"150px"}}><b>{item.title4}</b></Typography>
                                      <Typography sx={{ml:"30px", mt:"35px",fontSize:12}}><b>{item.address4}</b></Typography>                            
                                  </Box>
                                  <Box>
                                      <Typography sx={{ml:"28px",fontSize:12, mt:"5px", width:"200px"}}>{item.subaddress4}</Typography>
                                  </Box>
                                  <Box>
                                      <Typography sx={{fontSize:12, ml:"330px", mt:"-79px"}}><b>{item.contact4}</b></Typography>
                                      <Typography sx={{fontSize:12, ml:"330px", mt:"5px"}}>{item.subcontact4}</Typography>
                                  </Box>
                            </Card>
                        </Box>
                        
                    ))
                }
            </Grid>
            <Box sx={{ml:60, mt:-5}}>
              <Pagination />
            </Box>
            <Grid item md={6} sx={{position:'fixed', height:'100vh',px:"36px",py:"45px", backgroundColor:'white', ml:'66rem', mt:-3}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
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
        <Typography sx={{fontSize:18}}><b>Filter</b></Typography>
      </Box>
      <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px", boxShadow:"black" }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <LocationOnOutlinedIcon />
        </IconButton>
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Daerah"
          inputProps={{ 'aria-label': 'Daerah' }}
        />       
      </Paper>
      <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px", boxShadow:"black" }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <WorkOutlineOutlinedIcon />
        </IconButton>
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Bidang"
          inputProps={{ 'aria-label': 'Bidang' }}
        />       
      </Paper>
    </Grid>
    </Grid>
    </Box>
    );
  } 