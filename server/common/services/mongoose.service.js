const mongoose = require('mongoose');

let count = 0;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

// const url = "mongodb://localhost:27017/users";
const url = "mongodb+srv://mongodb:mongodb@mongouploads-xlhnt.gcp.mongodb.net/lcc?retryWrites=true&w=majority";

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect(process.env.MONGODB_URI || url, options).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.url = url;
exports.mongoose = mongoose;
