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


const StudentGroups = () => {

    const [groupName, setGroupName] = useState("");
    const [student1Name, setStudent1Name] = useState("");
    const [student1Number, setStudent1Number] = useState("");
    const [student1Email, setStudent1Email] = useState("");
    const [student1Contact, setStudent1Contact] = useState("");
    const [student2Name, setStudent2Name] = useState("");
    const [student2Number, setStudent2Number] = useState("");
    const [student2Email, setStudent2Email] = useState("");
    const [student2Contact, setStudent2Contact] = useState("");
    const [student3Name, setStudent3Name] = useState("");
    const [student3Number, setStudent3Number] = useState("");
    const [student3Email, setStudent3Email] = useState("");
    const [student3Contact, setStudent3Contact] = useState("");
    const [student4Name, setStudent4Name] = useState("");
    const [student4Number, setStudent4Number] = useState("");
    const [student4Email, setStudent4Email] = useState("");
    const [student4Contact, setStudent4Contact] = useState("");

const submitData = () => {
    const newStudentGroup = {
        groupName,
        student1Name,
        student1Number,
        student1Email,
        student1Contact,
        student2Name,
        student2Number,
        student2Email,
        student2Contact,
        student3Name,
        student3Number,
        student3Email,
        student3Contact,
        student4Name,
        student4Number,
        student4Email,
        student4Contact,
    }
    axios.post("http://localhost:8000/studentGroupsSchema/save", newStudentGroup).then(()=>{
        alert("Student Group Added")
    }).catch((err)=>{
        alert(err)
    })
}



    return(
        <Container>
            <StudentsNavBar/>
            <Typography variant='h4'>Add Submission Types</Typography>
            <FormControl>
                <InputLabel>Group Name</InputLabel>
                <Input name="groupName" onChange={(e)=> {setGroupName(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 01 Name</InputLabel>
                <Input name="student1Name" onChange={(e)=> {setStudent1Name(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 01 ID</InputLabel>
                <Input name="student1Number" onChange={(e)=> {setStudent1Number(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 01 Email</InputLabel>
                <Input name="student1Email" onChange={(e)=> {setStudent1Email(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 01 Contact No</InputLabel>
                <Input name="student1Contact" onChange={(e)=> {setStudent1Contact(e.target.value)}}/>
            </FormControl>

            <FormControl>
                <InputLabel>Student 02 Name</InputLabel>
                <Input name="student2Name" onChange={(e)=> {setStudent2Name(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 02 ID</InputLabel>
                <Input name="student2Number" onChange={(e)=> {setStudent2Number(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 02 Email</InputLabel>
                <Input name="student2Email" onChange={(e)=> {setStudent2Email(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 02 Contact No</InputLabel>
                <Input name="student2Contact" onChange={(e)=> {setStudent2Contact(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 03 Name</InputLabel>
                <Input name="student3Name" onChange={(e)=> {setStudent3Name(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 03 ID</InputLabel>
                <Input name="student3Number" onChange={(e)=> {setStudent3Number(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 03 Email</InputLabel>
                <Input name="student3Email" onChange={(e)=> {setStudent3Email(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 03 Contact No</InputLabel>
                <Input name="student3Contact" onChange={(e)=> {setStudent3Contact(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 04 Name</InputLabel>
                <Input name="student4Name" onChange={(e)=> {setStudent4Name(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 04 ID</InputLabel>
                <Input name="student4Number" onChange={(e)=> {setStudent4Number(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 04 Email</InputLabel>
                <Input name="student4Email" onChange={(e)=> {setStudent4Email(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Student 04 Contact No</InputLabel>
                <Input name="student4Contact" onChange={(e)=> {setStudent4Contact(e.target.value)}}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={submitData}>Add Submission Type</Button>
            </FormControl>
        </Container>
        )

}

export default StudentGroups;