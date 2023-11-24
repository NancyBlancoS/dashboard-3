import React from 'react'

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Unstable_Grid2";
import {IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import {FormatListBulletedOutlined, FmdGoodOutlined, GifBoxOutlined, ImageOutlined, SentimentSatisfiedAltOutlined, WorkHistoryOutlined} from '@mui/icons-material';
import userIcon from '../assests/img/icon-n.png'

export default function Header() {
    const iconStyle = { color: '#1D9BF0', fontSize: '15px'};

    // // const [value, setValue] = React.useState('1');

    // // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // //     setValue(newValue);
    // };

    return (
        <Grid container className="container header" direction="column">
            <Grid item className="header-upper">
                <span>Home</span>
            </Grid>

            {/* TODO: añadir elemento Tabs de MUI */}
            <Grid container className= 'header-mid' display="flex" justifyContent="center" alignItems="center">
                <Grid item className="header-mid-left">
                    <span>For you</span>
                </Grid>
                <Grid item className="header-mid-right">
                    <span>Following</span>
                </Grid>
            </Grid>

            {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box> */}

            <Grid item className="header-ipt" sx={{p:'15px 0', display:'flex', alignItems:'center'}}>
                <img src={userIcon} alt="" />
                <InputBase sx={{flex:1, p:'0 10px'}} placeholder="What is happening?!"/>
            </Grid>

            <Grid item className="header-icons" display="flex" alignItems="center">
                <Grid item className="header-icons-left">
                    <IconButton className='icons'>
                        <ImageOutlined sx={iconStyle}/> 
                    </IconButton>
                    <IconButton className='icons'>
                        <GifBoxOutlined sx={iconStyle}/>
                    </IconButton>
                    <IconButton className='icons'>
                        <FormatListBulletedOutlined sx={iconStyle}/>
                    </IconButton>
                    <IconButton className='icons'>
                        <SentimentSatisfiedAltOutlined sx={iconStyle}/>
                    </IconButton>
                    <IconButton className='icons'>
                        <WorkHistoryOutlined sx={iconStyle}/>
                    </IconButton>
                    <IconButton className='icons'>
                        <FmdGoodOutlined sx={iconStyle}/>
                    </IconButton>
                </Grid>

                <Grid item className="header-icons-right" sx={{display: 'flex', alignItems: 'center', justifyContent:'end'}} flex={1}> 
                    <Button variant="contained" sx={{width: '55px', borderRadius:'20px', textTransform: 'capitalize'}}>post</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
