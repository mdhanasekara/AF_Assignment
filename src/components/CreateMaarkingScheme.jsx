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
    }
`
const CreateMarkingScheme = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [marks, setMarks] = useState("");


    const submitData = () => {
        const newMarkingScheme = {
            title,
            description,
            marks
        }
        axios.post("http://localhost:8000/markingSchema/save", newMarkingScheme).then(()=>{
            alert("Marking Schema created")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <><AdminNavBar /><Container>
            <Typography variant='h4'>Create Marking Schemes</Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input name="title" onChange={(e) => { setTitle(e.target.value); } } />
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input name="description" onChange={(e) => { setDescription(e.target.value); } } />
            </FormControl>
            <FormControl>
                <InputLabel>Marks</InputLabel>
                <Input name="marks" onChange={(e) => { setMarks(e.target.value); } } />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={submitData}>Create Marking Scheme</Button>
            </FormControl>
        </Container></>
    )

}

export default CreateMarkingScheme;