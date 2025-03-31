import React, { useEffect, useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { getAllMovies } from '../api-helpers/api-helpers';
import {Link} from 'react-router-dom'
const Header = () => {
    const[value,setValue]=useState(0);
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err))
    },[])
    return (
        <AppBar position="sticky"  sx={{bgcolor:"#434547"}}>
            <Toolbar>
                <Box width={'20%'}>
                    <LocalMoviesIcon />
                </Box>
                <Box width={'30%'} margin={"auto"}>
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => <TextField  sx={{input:{color:'white'}}}variant='standard'{...params} placeholder="Search across movies" />}
                    />
                </Box>
                <Box display={'flex'}>
                    <Tabs textColor='inherit' indicatorColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={Link} to="/movies" label="Movies"/>
                        <Tab LinkComponent={Link} to="/admin" label="Admin"/>
                        <Tab LinkComponent={Link} to="/auth" label="Auth"/>
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
