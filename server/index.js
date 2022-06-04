const express  = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const submissionTypeRoutes = require('./routes/submissionTypeRoute');
const markingSchemaRoutes = require('./routes/markingSchemaRoute');
const studentGroupRoute = require('./routes/studentGroupsRoute');
const registerTopicRoute = require('./routes/registerTopicRoute');
const requestSupervisor = require('./routes/requestSupervisorRoute');
const requestCoSupervisor = require('./routes/requestCoSupervisorRoute');
const register = require('./routes/registerUserRoute');
const multer = require('multer');


const app = express();

app.use(bodyParser.json());
app.use(submissionTypeRoutes);
app.use(markingSchemaRoutes);
app.use(studentGroupRoute);
app.use(registerTopicRoute);
app.use(requestSupervisor);
app.use(requestCoSupervisor);
app.use(register);

//file upload
// app.use(express.static('public'));

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage: fileStorageEngine});

app.post('/single', upload.single("file"),(req, res) => {
    res.send("single file uploaded");
});

const PORT = 8000;

const DB_URL = 'mongodb+srv://sureni:sureni123@cluster0.gdmxzge.mongodb.net/AF?retryWrites=true&w=majority';

//databse connetion
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("DB connected");
}).catch((err) => console.log('db got error'));

app.listen(PORT, () => console.log("server Connected"));