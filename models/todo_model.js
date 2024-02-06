const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('../models/usermodel');
const { Schema } = mongoose;

const toDoSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName,
    },
    title:{
        type: String,
        required: true,

    },
    desc:{
        type: String,
        required:true,
    }


   
});

const toDoModel = db.model('toDo',toDoSchema);

module.exports = toDoModel;
