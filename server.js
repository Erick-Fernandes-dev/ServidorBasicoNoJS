const express = require('express')
const server = express()

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
});

server.use(express.static('public'))


server.listen(8081, function () {
    console.log("listening a tester")
})

server.get('/', function (req, res) {
    return res.send("Hello World")
})

// server.get('/', function (req, res) {
//     return res.render('index.html')
// })