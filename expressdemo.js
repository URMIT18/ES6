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
    res.sendfile(__dirname + "/about.html");
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});