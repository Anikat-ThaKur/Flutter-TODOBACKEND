const todoService = require("../services/todoservices");

exports.createtodo = async(req,res,next)=>{
    try{
        const {userId,title,desc} = req.body;
        let todo = await todoService.createtodo(userId,title,desc);
        res.json({status:true,success:todo});


    }
    catch(error)
    {
        next(error);
    }


}
exports.getusertodo = async(req,res,next)=>{
    try{
        const {userId} = req.body;
        let todo = await todoService.gettododata(userId);
        res.json({status:true,success:todo});


    }
    catch(error)
    {
        next(error);
    }


}