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
const RequestSupervisor = () => {
    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [assignedName, setassignedName] = useState("pending");
    


    const submitData = () => {
        const newSupervisor = {
            name,
            topic,
            description,
            assignedName
        }
        axios.post("http://localhost:8000/requestSupervisor/save", newSupervisor).then(()=>{
            alert("request created")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <Container>
        <StudentsNavBar/>
        <Typography variant='h4'>Request Supervisor</Typography>
        <FormControl>
            <InputLabel>Student Name</InputLabel>
            <Input name="name" onChange={(e)=> {setName(e.target.value)}}/>
        </FormControl>
        <FormControl>
            <InputLabel>Topic</InputLabel>
            <Input name="topic" onChange={(e)=> {setTopic(e.target.value)}}/>
        </FormControl>
        <FormControl>
            <InputLabel>Description</InputLabel>
            <Input name="description" onChange={(e)=> {setDescription(e.target.value)}}/>
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={submitData}>Request Supervisor</Button>
        </FormControl>
    </Container>
    )

}

export default RequestSupervisor;