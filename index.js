const { log } = require('console');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware)

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


app.get('/about', localMiddleware, (req, res) => {
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
            res.end();        }
    })
})

app.listen(4000, () => {
    console.log('Server is listening on PORT 4000');
})




/**
 * 1. This is a middleware signature
 * 2. if everything seems ok controller will call response methods
 * 3. if everything seems OK middleware will call next
 */
function handler(req, res, next) {
    /**
     * read request object
     * process request
     * response back the result
     */
}

function middlewareSignature(req, res, next) {
    next();
}

function globalMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log('I am a global middleware');

    if(req.query.bad) {
        return res.status(400).send('Bad Request');
    }

    next();
}

function localMiddleware(req, res, next) {
    console.log('I am local middleware');
    next();
}

// GET, POST, PUT, PATCH, DELETE