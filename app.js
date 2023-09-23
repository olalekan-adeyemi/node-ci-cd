const morgan = require('morgan')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const path = require('path')

app.use(express.static(path.join(__dirname, '/frontend/build')))

//MORGAN
app.use(morgan('dev'))

//CORS - cross origin resource sharing
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)

	next()
})

app.get('/api', (req,res) => {
    res.send('Adeyemi Lawrence')
})

app.listen(PORT, ()=>{
    console.log(`nodejs application is now running on port ${PORT}`)
})