import React,{useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }
`

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  let navigate = useNavigate(); 


  const submitData = () => {
    if(userType === 'admin'){
      console.log(userType === 'admin');
      let path1 = `/adminNavbar`; 
      navigate(path1);   
    }else if (userType === 'student') {
      let path1 = `/studentNavBar`; 
      navigate(path1);  
    }
  }

    return(

      <Container>
      <Typography variant='h4'>Login</Typography>
      <FormControl>
          <InputLabel>Username</InputLabel>
          <Input name="username" onChange={(e)=> {setUsername(e.target.value)}}/>
      </FormControl>
      <FormControl>
          <InputLabel>Password</InputLabel>
          <Input name="password" onChange={(e)=> {setPassword(e.target.value)}}/>
      </FormControl>
      <FormControl>
          <InputLabel>User Type</InputLabel>
          <Input name="userType" onChange={(e)=> {setUserType(e.target.value)}}/>
      </FormControl>
      <FormControl>
            <Button variant="contained" onClick={submitData}>Login</Button>
      </FormControl>
      <FormControl>
            <NavLink to="/register">New User? Register</NavLink>
      </FormControl>
      </Container>

      )
}

export default Home;