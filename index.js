var express = require('express');

var app = express();

var port = 3000;

app.get('/', (req,res) => {

    res.send("Hello word two");
})

app.listen(port, function(){
    console.log("Server is started on port 3000");
});