import React,{useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import AdminNavBar from './NavBars/AdminNavBar';


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }`


const AllocatePanelMembers = () => {

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [pannel, setPannel] = useState("");

    
    const submitData = () => {
        const newPannel = {
            name,
            email,
            pannel
        }
        axios.post("http://localhost:8000/addPannel/save", newPannel).then(()=>{
            alert("Pannel Added")
        }).catch((err)=>{
            alert(err)
        })
    }
    
        return(
            <><AdminNavBar /><Container>
                <Typography variant='h4'>Add Pannel Members</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input name="name" onChange={(e) => { setName(e.target.value); } } />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input name="email" onChange={(e) => { setEmail(e.target.value); } } />
                </FormControl>                
                <FormControl>
                    <InputLabel>Pannel No</InputLabel>
                    <Input name="pannel" onChange={(e) => { setPannel(e.target.value); } } />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={submitData}>Add Submission Type</Button>
                </FormControl>
            </Container></>
            )
    
}

export default AllocatePanelMembers;