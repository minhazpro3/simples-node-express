const express=require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req,res)=>{
    res.send('Hello friend i am very excited but error solved');
})

const user = [
    {id: 0, name: 'shabana', email: 'shabana@gmail.com'},
    {id: 1, name: 'moushumi', email: 'mushumi@gmail.com'},
    {id: 2, name: 'shucorita', email: 'shucorita@gmail.com'},
    {id: 3, name: 'purnima', email: 'purnima@gmail.com'},
    {id: 4, name: 'Shabnur', email: 'shabnur@gmail.com'}
]
app.get('/user',(req,res)=>{

    // use query paramiter  
   const search = req.query.search;
   if(search){
    const searchResult = user.filter(use=>use.name.toLocaleLowerCase().includes(search))
    res.send(searchResult)
   }
   else{
    res.send(user)
   }   
})
// app method
app.post('/user', (req,res)=>{

    const newUser = req.body;
    newUser.id = user.length;
    user.push(newUser)
    console.log('hitting the post',req.body);
    // data sent system 2 ta 
    // system no 1
    // res.send(JSON.stringify(newUser)) 
    // ststem no 2
    res.json(newUser)
})
// dynamic api
app.get('/user/:id',(req,res)=>{

    const id = req.params.id;
    const users=user[id]
    res.send(users)
})

app.get('/fruits', (req,res)=>{
    res.send(['rupali','fazli','banana'])
})
app.get('/fruits/mango/fazli',(req,res)=>{
    res.send('yammy yammy fazli tok am')
})

app.listen(port,()=>{
    console.log('listening to port', port);
})