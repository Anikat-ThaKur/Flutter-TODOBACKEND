const UserService = require("../services/userservices");

exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const successRes = await UserService.registerUser(email,password);

        res.json({status:true,success:"User Registered Successfully"});

    }
    catch(err)
    {
        throw err;
    }
}
exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const user = await UserService.checkUser(email);
        if(!user)
        {
            throw new Error("user doesnt exist");

        }
        const isMatch = await user.comparePassword(password);
        if(isMatch === false)
        {
            throw new error("Wrong password entered");
        }

        let tokenData = {_id:user._id,email:user._email};
        const token = await UserService.generatetoken(tokenData,"secret",'1h');
        res.status(200).json({status:true,token:token});
    }
    catch(err)
    {
        throw err;
    }
}