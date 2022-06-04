import React from 'react';
import AddSubmissionType from './components/AddSubmissionTypes';
import AdminNavBar from './components/NavBars/AdminNavBar';
import ViewUsers from './components/ViewUsers';
import CreateMaarkingScheme from './components/CreateMaarkingScheme'
import AllocatePanel from './components/AllocatePanelMembers';
import UploadAdmin from './components/UploadAdmin';
import UploadStudent from './components/UploadStudent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentsNavBar from './components/NavBars/StudentsNavBar';
import Home from './components/Home';
import StudentGroups from './components/StudentGroups';
import RegisterTopic from './components/RegisterTopic';
import RequestCoSupervisor from './components/RequsetCoSupervisor';
import RequestSupervisor from './components/RequestSupervisor';
import Register from './components/Register';
import EditUser from './components/EditUser';
import SupervisorNavBar from './components/NavBars/SupervisorNavBar';
import AcceptTopics from './components/AcceptTopics';
import EvaluateDocs from './components/EvaluateDocs';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/editUser/:id' element={<EditUser/>}/>
                <Route path='/adminNavBar' element={<AdminNavBar/>}/>
                <Route path='/supervisorNavBar' element={<SupervisorNavBar/>}/>
                <Route path='/studentNavBar' element={<StudentsNavBar/>}/>
                <Route path='/viewUser' element={<ViewUsers/>}/>
                <Route path='/AddSubmissionType' element={<AddSubmissionType/>}/>
                <Route path='/CreateMaarkingScheme' element={<CreateMaarkingScheme/>}/>
                <Route path='/AllocatePanel' element={<AllocatePanel/>}/>
                <Route path='/UploadAdmin' element={<UploadAdmin/>}/>
                <Route path='/UploadStudent' element={<UploadStudent/>}/>
                <Route path="/createStudentGroups" element={<StudentGroups/>}/>
                <Route path="/registerTopic" element={<RegisterTopic/>}/>
                <Route path="/markingSchemas" element={<EvaluateDocs/>}/>
                <Route path="/requestSupervisor" element={<RequestSupervisor/>}/>
                <Route path="/requestCoSupervisor" element={<RequestCoSupervisor/>}/>
                <Route path="/acceptTopics" element={<AcceptTopics/>}/>


            </Routes>
        </BrowserRouter>
            
            
    )
}
export default App;