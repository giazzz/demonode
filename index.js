const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const  port = 8888;


app.use(bodyParser.urlencoded({ extended: false }))
app.get('/cuoi', function (req, res) {
    res.send("Hello");

});

app.post('/signup', function (req, res) {
    res.send("Bạn đã tạo tk thành công" + "<br>"+req.body.username +"<br>"+req.body.fullname+"<br>"+req.body.password);
});
app.listen(port, function () {
    console.log("Hello");
});

