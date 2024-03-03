const fs = require('fs');


exports.homeController = (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if(err) {
            console.log('Error ', err);
            res.send('Somthing went wrong');
        } else {
            res.write(data);
            res.end();
        }
    });
}

exports.aboutController =  (req, res) => {
    fs.readFile('./pages/about.html', (err, data) => {
        if(err) {
            console.log('Error', err);
            res.send('Somthing went wrong');
        } else {
            res.write(data);
            res.end();
        }
    });
}

exports.helpController = (req, res) => {
    fs.readFile('./pages/help.html', (err, data) => {
        if(err) {
            console.log('Error', err);
            res.send('Something went wrong');
        } else {
            res.write(data);
            res.end();        }
    });
}