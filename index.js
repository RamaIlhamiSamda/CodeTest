const express = require('express')
const route = require('express').Router()
const port = 3000
const serverless = require('serverless-http')

const app = express()
app.use(route)

app.listen(port,()=>{
    console.log(`app is listening on ${port} `)
})

app.use('/',(req,res)=>{
    res.send("apa loewew")
})


// module.exports.handler = serverless(app)