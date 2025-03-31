import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helpers'
import MovieItem from './MovieItem'

const Movies = () => {
    const[movies,setMovies]=useState([])
    useEffect(()=>{
        getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err));
    },[])
  return (
    <Box margin={'auto'} marginTop={4}>
        <Typography variant='h4' padding={2} textAlign={'center'} width={'50%'} bgcolor={"#900C3F"} color='white' margin={'auto'}>
        All movies  
        </Typography> 
        <Box marginTop={5} width={'100%'} margin={'auto'} display={'flex'} justifyContent={'flex-start'} flexWrap={'wrap'}>
        {movies && movies.slice(0,4).map((movie,index) => (
                    <MovieItem id={movie.id} title={movie.title} releaseDate={movie.releaseDate} posterUrl={movie.posterUrl} key={index} />
                ))}
        </Box>
    </Box>
  )
}

export default Movies
