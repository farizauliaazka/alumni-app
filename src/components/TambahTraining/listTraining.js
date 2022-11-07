import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import HomeIcon from '@mui/icons-material/Home';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatIcon from '@mui/icons-material/Chat';
// import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
// import LogoutIcon from '@mui/icons-material/Logout';
import IMG from '../../assets/image.jpg'
import IMG2 from '../../assets/image2.png'
import IMG3 from '../../assets/image3.png'
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
export default function ResponsiveDrawer() {
    let dataAssessment = [
        {
          title:"Building Great Teamwork",
          subtitle:"Studio Belajar",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
          tempat:"Tempat",
          subtempat:"Aula Ibrahim",
          date:"Tanggal & Waktu",
          isidate:"1 Juli 2023   13:00 WIB - 15:00 WIB",
          price:"Free",
          image:IMG,
          title2:"Developing Communication Skills",
          subtitle2:"Studio Belajar",
          desc2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
          tempat2:"Tempat",
          subtempat2:"Aula Ibrahim",
          date2:"Tanggal & Waktu",
          isidate2:"1 Juli 2023   13:00 WIB - 15:00 WIB",
          price2:"Free",
          image2:IMG2,
          title3:"Basic Leadership Skills for Officer",
          subtitle3:"Studio Belajar",
          desc3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
          tempat3:"Tempat",
          subtempat3:"Aula Ibrahim",
          date3:"Tanggal & Waktu",
          isidate3:"1 Juli 2023   13:00 WIB - 15:00 WIB",
          price3:"Free",
          image3:IMG3
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
            Training
          </Typography>
        </Toolbar>
      </AppBar>
        <Grid container sx={{mt:5}} style={{backgroundColor:"#ECECEC", height:'100%', width:'100%'}}>
            <Grid item md={8} alignItems='center' sx={{ p:"50px", ml:'18rem'}}>
              {
                dataAssessment.map((item,index)=>(
                  <Box sx={{p:"10px"}}>
                    
      <Link to="/detailTraining"><Card sx={{mt:'10px', width:'105vh', height:'33vh', ml:"-35px"}}>
                      <Box sx={{ width: 128, height: 128 }}>
                        <Img alt="kerja" src={item.image} sx={{width:217, height:217}}/>
                      </Box>
                      <Box sx={{ml:25}}>
                        <Box sx={{ml:"30px", mt:-15}}>                      
                          <Box sx={{display:"column", height:300}}>                          
                              <Typography sx={{fontSize:14}}><b>{item.title}</b></Typography>  
                              <Typography style={{color:"grey"}} sx={{fontSize:14}}>{item.subtitle}</Typography>                         
                          </Box>
                          <Box>
                              <Typography sx={{fontSize:14, mt:-31, mr:"12px"}}>{item.desc}</Typography>                          
                              <Typography sx={{fontSize:14, mt:1}}><b>{item.tempat}</b></Typography>
                              <Typography sx={{fontSize:14}}>{item.subtempat}</Typography>
                              <Typography sx={{fontSize:14, ml:15, mt:-5.2}}><b>{item.date}</b></Typography>
                              <Typography sx={{fontSize:14, ml:15}}>{item.isidate}</Typography>
                              <Typography style={{color:"blue"}} sx={{fontSize:14, ml:51}}><b>{item.price}</b></Typography>                          
                          </Box>
                        </Box>   
                      </Box>    
                    </Card>
                    </Link>
                    <Link to="/detailTraining2"><Card sx={{mt:'10px', width:'105vh', height:'33vh', ml:"-35px", mt:6}}>
                      <Box sx={{ width: 128, height: 128 }}>
                        <Img alt="kerja" src={item.image2} sx={{width:217, height:217}}/>
                      </Box>
                      <Box sx={{ml:25}}>
                        <Box sx={{ml:"30px", mt:-15}}>                      
                          <Box sx={{display:"column", height:300}}>                          
                              <Typography sx={{fontSize:14}}><b>{item.title2}</b></Typography>  
                              <Typography style={{color:"grey"}} sx={{fontSize:14}}>{item.subtitle2}</Typography>                         
                          </Box>
                          <Box>
                              <Typography sx={{fontSize:14, mt:-31, mr:"12px"}}>{item.desc2}</Typography>                          
                              <Typography sx={{fontSize:14, mt:1}}><b>{item.tempat2}</b></Typography>
                              <Typography sx={{fontSize:14}}>{item.subtempat2}</Typography>
                              <Typography sx={{fontSize:14, ml:15, mt:-5.2}}><b>{item.date2}</b></Typography>
                              <Typography sx={{fontSize:14, ml:15}}>{item.isidate2}</Typography>
                              <Typography style={{color:"blue"}} sx={{fontSize:14, ml:51}}><b>{item.price2}</b></Typography>                          
                          </Box>
                        </Box>   
                      </Box>    
                    </Card>
                    </Link>
                    <Link to="/detailTraining3"><Card sx={{mt:'10px', width:'105vh', height:'33vh', ml:"-35px", mt:6}}>
                      <Box sx={{ width: 128, height: 128 }}>
                        <Img alt="kerja" src={item.image3} sx={{width:217, height:217}}/>
                      </Box>
                      <Box sx={{ml:25}}>
                        <Box sx={{ml:"30px", mt:-15}}>                      
                          <Box sx={{display:"column", height:300}}>                          
                              <Typography sx={{fontSize:14}}><b>{item.title3}</b></Typography>  
                              <Typography style={{color:"grey"}} sx={{fontSize:14}}>{item.subtitle3}</Typography>                         
                          </Box>
                          <Box>
                              <Typography sx={{fontSize:14, mt:-31, mr:"12px"}}>{item.desc3}</Typography>                          
                              <Typography sx={{fontSize:14, mt:1}}><b>{item.tempat3}</b></Typography>
                              <Typography sx={{fontSize:14}}>{item.subtempat3}</Typography>
                              <Typography sx={{fontSize:14, ml:15, mt:-5.2}}><b>{item.date3}</b></Typography>
                              <Typography sx={{fontSize:14, ml:15}}>{item.isidate3}</Typography>
                              <Typography style={{color:"blue"}} sx={{fontSize:14, ml:51}}><b>{item.price3}</b></Typography>                          
                          </Box>
                        </Box>   
                      </Box>    
                    </Card> 
                    </Link>  
                  </Box>
                ))
              }   
   </Grid>

   <Grid item md={6} sx={{position:'fixed', height:'100vh',px:"36px",py:"45px", backgroundColor:'white', ml:'66rem', mt:-3}}>
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
        <Typography sx={{fontSize:18}}><b>Filter</b></Typography>
      </Box>
      <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"black", fontSize:16}}>Diurutkan berdasarkan</FormLabel>
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
    </Grid>
    </Box>
  );
}