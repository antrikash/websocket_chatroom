var express = require('express');
var app = express();
var socket = require('socket.io');




var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));


var server = app.listen(port, function(){
    console.log("connection to port 3000");
});



//socket.io setup


var io = socket(server);
io.on('connection', function(socket){
    console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);

    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });

});