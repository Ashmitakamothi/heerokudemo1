const express = require('express')
const dotnev = require('dotenv/config')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.send("Hello, asmita")
})//

const PORT = process.env.PORT || 3001


app.listen(PORT, ()=>{//
    console.log(`Server running on ${PORT}`)
})//