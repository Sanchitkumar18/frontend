import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { useState } from 'react'
const labelStyle = { mt: 1, mb: 1 };
const AuthForm = ({onSubmit,isAdmin}) => {
    const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
    const [isSignup, setisSignup] = useState(false);
    const handleChange=(e)=>{
        setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value,}))
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({inputs,signup:isAdmin?false:isSignup}); 
    }
    return (
        <Dialog open={true} fullWidth>
            <Box sx={{
                m1: "auto", padding: 1, display: "flex",
                justifyContent: "flex-end"
            }}>
                <IconButton>
                    <CloseRoundedIcon />
                </IconButton>

            </Box>
            <Typography variant='h4' textAlign={'center'}>{isSignup ? "Sign up" : "Login"}</Typography>
            <form onSubmit={handleSubmit}>
                <Box padding={6} display={'flex'} justifyContent={'center'} flexDirection={'column'} width={'400'} margin={'auto'} alignContent={'center'}>
                    { !isAdmin && isSignup && <><FormLabel sx={labelStyle}>Name</FormLabel>
                        <TextField value={inputs.name} onChange={handleChange} margin='normal' variant='standard' type='name' name='name' /></>}
                    <FormLabel sx={labelStyle}>Email</FormLabel>
                    <TextField value={inputs.email} onChange={handleChange} margin='normal' variant='standard' type='email' name='email' />
                    <FormLabel sx={labelStyle}>Password</FormLabel>
                    <TextField value={inputs.password} onChange={handleChange} margin='normal' variant='standard' type='password' name='password' />
                    <Button sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }} type='submit' fullWidth variant='contained'>{isSignup ? "Sign up" : "Login"}</Button>
                    {!isAdmin && (<Button onClick={() => setisSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth >{isSignup ? "Login" : "Sign up"}</Button>)}
                </Box>
            </form>
        </Dialog>
    )
}

export default AuthForm
