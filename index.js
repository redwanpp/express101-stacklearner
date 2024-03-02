const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>I am Home Route</h1>`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>I am About Route</h1>`)
})

app.get('/help', (req, res) => {
    res.send(`<h1>I am Help Route</h1>`)
})

app.listen(4000, () => {
    console.log('Server is listening on PORT 4000');
})