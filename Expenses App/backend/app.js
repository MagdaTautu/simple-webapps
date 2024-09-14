const express = require('express');
const cors = require('cors');
const { request } = require('express');

const app = express()

require ('dotenv').config()
const PORT = process.env.PORT 

//middlewares
app.use(express.json())
app.use(cors())
app.get('/', (req,res)=>{
    res.send('Hello World')
})

const server  = () =>{
    app.listen(PORT, () => {
        console.log("You are listening  to port: ", PORT);
    })
}

server()