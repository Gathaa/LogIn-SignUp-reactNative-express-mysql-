const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json())
app.use(cors());
const db = mysql.createConnection({
    user: 'root',
    host :'localhost',
    password:'dbpassword',
    database:'dbname',
    port:'3306',
});
app.post('/create',(req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const password = req.body.password;
    db.query(
        'INSERT INTO carowner(name,email,phonenumber,password) VALUES (?,?,?,?)',[name,email,phonenumber,password] ,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("All The Attributes Were Inserted Into Our Tables !!!!");
        }
    })
})    


app.post('/retrieve' ,(req,res)=>{
    const  username = req.body.username;
    const userpassword = req.body.userpassword;
    db.query(
        "SELECT * from carowner WHERE name = ? AND password =? ",[username,userpassword] ,(err,result) =>{
        if(err){
            console.log(err);
            res.send({err:err})
        }

        if(result){
            res.send(result)
        }
        else{
            res.send({message:"Wrong Password Or Email Please Check Again"});
        }
    })
})
app.listen(port, () => {
    console.log(`Server Is Runnning On Your Port ${port}`);
});
