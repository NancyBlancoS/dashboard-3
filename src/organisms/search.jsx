import React from 'react'

import {IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


export default function Search() {
    return (
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 320, borderRadius: '30px', bgcolor: '#F9F9F9'}}>
                <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1}} placeholder="Search"/>
            </Paper>
    )
}