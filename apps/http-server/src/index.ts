import express from "express";

const app = express();

app.use(express.json());


app.get('/signup',(req,res)=>{
     res.json({
        msg:"Sign Up"
})
})

app.get('/signin',(req,res)=>{
    res.json({
       msg:"Sign In"
})
})


app.get('/chat',(req,res)=>{
    res.json({
       msg:"Chat"
})
})

app.listen(3001); 