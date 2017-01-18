/**
 * Created by bhuvanapalli on 1/18/17.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');

});

app.get('/hello', function(req, res){
    io.emit('message', "My name is " + req.query.name);

    res.send("hello");

});

http.listen(3001, function(){

    console.log('listening on *:3001');

});

