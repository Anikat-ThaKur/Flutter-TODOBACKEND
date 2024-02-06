const app = require('./app');
const db = require('./config/db');
const UserModel = require('./models/usermodel');
const todoModel = require('./models/todo_model');
const port = 3000;

app.get('/',(req,res) =>  {
   res.send("hello world!!!");
})
app.listen(port,()=>{
    console.log(`Server listening on Port http://localhost:${port}`);
})