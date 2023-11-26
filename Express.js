const express = require('express')

const app = express()

app.use(express.static('./'))

const path = require('path')

app.listen(5000, ()=>{

    console.log('Server on port 5000')
})

app.get('/', (req, res)=>{

    res.sendFile(path.resolve(__dirname, 'MainPage.html'))
})

app.get('/about', (req, res)=>{

    res.send('About Page')
})

app.all('*', (req, res)=>{

    res.status(404).send('<h1>This page does not exist</h1>')
})