const express = require("express");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/landPage.html");
});

app.use(express.static(__dirname + '/public')); //I think this ports any link to start from
                                                //public file

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

app.use(connectLiveReload());
