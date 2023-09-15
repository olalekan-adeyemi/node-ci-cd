const express = require('express')
const app = express()
const PORT = 9000

app.get('/', (req,res) => {
    res.send('Welcome to our simple node application')
})

app.listen(PORT, ()=>{
    console.log(`nodejs application is now running on port ${PORT}`)
})