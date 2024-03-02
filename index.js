const { log } = require('console');
const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if(err) {
            console.log('Error ', err);
            res.send('Somthing went wrong');
        } else {
            res.write(data);
            res.end();
        }
    });
});

app.get('/about', (req, res) => {
    fs.readFile('./pages/about.html', (err, data) => {
        if(err) {
            console.log('Error', err);
            res.send('Somthing went wrong');
        } else {
            res.write(data);
            res.end();
        }
    });
});

app.get('/help', (req, res) => {
    fs.readFile('./pages/help.html', (err, data) => {
        if(err) {
            console.log('Error', err);
            res.send('Something went wrong');
        } else {
            res.write(data);
            res.end();
        }
    })
})

app.listen(4000, () => {
    console.log('Server is listening on PORT 4000');
})