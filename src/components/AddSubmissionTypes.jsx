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


const AddSubmissionType = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");

const submitData = () => {
    const newSubmissionType = {
        name,
        type
    }
    axios.post("http://localhost:8000/submissionType/save", newSubmissionType).then(()=>{
        alert("Submission Typed Added")
    }).catch((err)=>{
        alert(err)
    })
}



    return(
        <><AdminNavBar /><Container>
            <Typography variant='h4'>Add Submission Types</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name="name" onChange={(e) => { setName(e.target.value); } } />
            </FormControl>
            <FormControl>
                <InputLabel>Type</InputLabel>
                <Input name="type" onChange={(e) => { setType(e.target.value); } } />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={submitData}>Add Submission Type</Button>
            </FormControl>
        </Container></>
        )

}

export default AddSubmissionType;