import * as React from 'react';
import {Box, CssBaseline, AppBar, Toolbar, Typography} from '@mui/material';

const drawerWidth = 258;
const pengaturan = () => {
  return (
    <Box sx={{ maxWidth:'100%', display:'flex', ml:'17rem' }}>
        <CssBaseline />
        <AppBar
            elevation={1}
            position= "fixed"
            sx={{
            width: { md: `calc(200vh)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: 'white',
            paddingTop: '10px',
            paddingLeft:'4rem'
            }}
            >
        <Toolbar sx={{ width:'auto', ml:'3rem' }}>
        <Typography sx={{ ml:'50px', mt:'-33px' }} fontSize={'17px'} fontFamily={'Poppins'} color={'black'} paddingLeft={'3rem'}>
            <b>PENGATURAN</b>
        </Typography>
        <Typography style={{color:'grey'}} sx={{ ml:'-165px', mt:'13px' }} fontSize={'13px'} fontFamily={'Poppins'}  paddingLeft={'3rem'}>
            Akun yang lengkap merupakan salah satu pertimbangan perusahaan.
        </Typography>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default pengaturan