const mongoose = require('mongoose');

const connection =  mongoose.createConnection('mongodb://127.0.0.1:27017/toDo').on('open',()=>{
    console.log("mongoose connected");
}).on('error',()=>{
    console.log("mongoose connection failde");
});

module.exports = connection;