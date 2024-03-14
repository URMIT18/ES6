const express = require('express');
const app = express();
const port = 8080
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/home.html");
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});
app.get('/search/', (req, res) => {
    var id = req.query.id;
    res.send("Sorry " + id + " not found");
});
app.get('/process/', (req, res) => {
    var txt1 = parseInt(req.query.txt1);
    var txt2 = parseInt(req.query.txt2);
    var c = txt1 + txt2;
    res.send("A value is " + txt1 + " B value is " + txt2 + " sum value is " + c);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});