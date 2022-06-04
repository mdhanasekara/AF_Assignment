import mongoose from 'mongoose';

const connection = async () => {
    // mongodb+srv://sureni:sureni123@cluster0.s12kuqj.mongodb.net/?retryWrites=true&w=majority
    const URL = 'mongodb+srv://sureni:sureni123@cluster0.at2tt.mongodb.net/?retryWrites=true&w=majority';

    
    //`mongodb://sureni:sureni123@ac-30nxl5t-shard-00-00.oaziwkm.mongodb.net:27017,ac-30nxl5t-shard-00-01.oaziwkm.mongodb.net:27017,ac-30nxl5t-shard-00-02.oaziwkm.mongodb.net:27017/AF?ssl=true&replicaSet=atlas-d1cqk3-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
         mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("database Connected")
        } catch(error){
        console.log(error);
    }
}

export default connection;