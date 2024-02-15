require('dotenv').config()
const express=require('express')
const app=express()

const port=4001


app.get('/',(req,res)=>{
    res.send('Hello djdjjdd')
})

app.get('/twitter',(req,res)=>{
    res.send('Hello Sudha')
})

app.get('/youtube',(req,res)=>{
    res.send('youtube india')
})

app.get('/login',(req,res)=>{
    res.send('<h1> logoin to my website <h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
    
})