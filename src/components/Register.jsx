import React,{useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }
`
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitData = () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password
        }
        axios.post("http://localhost:8000/user/save", newUser).then(()=>{
            alert("User created")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <Container>
        <Typography variant='h4'>Register User</Typography>
        <FormControl>
            <InputLabel>First Name</InputLabel>
            <Input name="firstName" onChange={(e)=> {setFirstName(e.target.value)}}/>
        </FormControl>
        <FormControl>
            <InputLabel>Last Name</InputLabel>
            <Input name="lastName" onChange={(e)=> {setLastName(e.target.value)}}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name="email" onChange={(e)=> {setEmail(e.target.value)}}/>
        </FormControl>
        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input name="password" type="password" onChange={(e)=> {setPassword(e.target.value)}}/>
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={submitData}>Register</Button>
        </FormControl>
    </Container>
    )

}

export default Register;