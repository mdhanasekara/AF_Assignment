
import React,{useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import StudentNavBar from './NavBars/StudentsNavBar';

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }
`

const UploadStudent = () => {
    const [files, setFiles] = useState([]);
    const submitData = () => {
        const data = new FormData();

            data.append('file', files);

        fetch('http://localhost:8000/single', {method:"POST", body:data})
            .then((response) => {
                alert('Upload Success');
            })
            .catch((e) => {
                alert('Upload Error')
            })

    }

    return(
        <><StudentNavBar /><Container>
            <Typography variant='h4'>Upload Documents</Typography>
            <FormControl>
                <InputLabel>Upload File</InputLabel>
                <Input name="file" type='file' onChange={(e) => { setFiles(e.target.files[0]); } } />
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={submitData}>Upload</Button>
            </FormControl>
        </Container></>
    )

}

export default UploadStudent;