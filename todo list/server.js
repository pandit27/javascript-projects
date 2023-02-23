const express = require('express');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const filepath = path.join(__dirname, 'public');

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.sendFile(`${filepath}/index.html`)

    const today = new Date();
    let day = '';

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    day = today.toLocaleDateString('en-US', options);

    res.render('list', { $day: day, listItems: items });
})

app.post('/', (req, res) => {
    let item = req.body.newItem;
    items.push(item);
    res.redirect('/');
})

const port = 4000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})