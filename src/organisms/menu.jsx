import React from 'react'

import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";
import Button from '@mui/material/Button';

import {FeaturedPlayListOutlined, HomeOutlined, PermIdentityOutlined, PeopleOutlined, PendingOutlined, MailOutlineOutlined, NotificationsNoneOutlined, SearchOutlined} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import twitterLogo from '../assests/img/twitter-logо.png'

import '../styles/styles.css';

export default function Menu() {

    const iconStyle = {color: '#0F1419', py:'10px'};

return (
        <Box container className="container menu" sx={{height: '100%', display:"flex", justifyContent:"center", alignItems:"center"}}>
            <MenuList sx={{width:'100%'}}>
                <MenuItem className="option">    
                    <img src={twitterLogo} alt="" />
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <HomeIcon/>
                    <ListItemText>Home</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <SearchOutlined/>
                    <ListItemText>Explore</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                <NotificationsNoneOutlined/>
                    <ListItemText>Notification</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <MailOutlineOutlined/>
                    <ListItemText>Messages</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <FeaturedPlayListOutlined/>
                    <ListItemText>Lists</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PeopleOutlined/>
                    <ListItemText>Communities</ListItemText>
                </MenuItem>

                <MenuItem className="option">    
                    <img src={twitterLogo} alt="" />
                    <ListItemText>Premium</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PermIdentityOutlined/>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PendingOutlined/>
                    <ListItemText>More</ListItemText>
                </MenuItem>
                <Button variant="contained" sx={{width: '100%', borderRadius:'20px', textTransform: 'capitalize'}}>post</Button>
            </MenuList>
        </Box>

    )
}
