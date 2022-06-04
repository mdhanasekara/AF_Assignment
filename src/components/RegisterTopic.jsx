import React,{useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import StudentsNavBar from './NavBars/StudentsNavBar';

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }
`
const RegisterTopic = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");


    const submitData = () => {
        const newtopic = {
            name,
            description,
            status
        }
        axios.post("http://localhost:8000/registerTopic/save", newtopic).then(()=>{
            alert("Topic created")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <Container>
        <StudentsNavBar/>
        <Typography variant='h4'>Register Topic</Typography>
        <FormControl>
            <InputLabel>Title</InputLabel>
            <Input name="name" onChange={(e)=> {setName(e.target.value)}}/>
        </FormControl>
        <FormControl>
            <InputLabel>Description</InputLabel>
            <Input name="description" onChange={(e)=> {setDescription(e.target.value)}}/>
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={submitData}>Register Topic</Button>
        </FormControl>
    </Container>
    )

}

export default RegisterTopic;