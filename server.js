var express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');
     
    //Server Configuration

    app.use(express.static(path.join(__dirname,'public')));

    var server=app.listen(8000,function(){
        var host=server.address.address;
        var port=server.address.port;

        console.log("Express application running at port 8000");
    });
    
    app.get('/',function(req,res){
           res.sendFile(path.join( __dirname +'/index.html'));
        
    });
    
    app.all('*',function(req,res){
        res.send("Invalid URL...");
    });
    