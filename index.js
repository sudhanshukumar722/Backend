require('dotenv').config()
const express=require('express')
const app=express()

const port=4001

const data =[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

app.get('/github',(req,res)=>{
    res.json(data)
})
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