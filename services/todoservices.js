const todoModel = require('../models/todo_model');

class todoService{
    static async createtodo(userId,title,desc){
        const createTodo = new todoModel({userId,title,desc});
        return await createTodo.save();
    }
    static async gettododata(userId)
    {
        const gettododata= await todoModel.find({userId});
        return gettododata;
    }
    

}
module.exports = todoService;