var express = require('express'),
    app = express(),
    port = 5000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

//Express setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/views')); //dirname needed to start server from other server, can always find
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile("index.html");
});

app.listen(port, function(){
    console.log("App is running on port " + port);
});