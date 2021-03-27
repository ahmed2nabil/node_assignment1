const express = require("express"),
      http    = require("http"),
    dishRouter = require('./routes/dishes'),
    leaderRouter = require('./routes/leaders'),
    pormotionRouter = require('./routes/pormotions');

    

const hostname = 'localhost';
const port =  3000 ;

const app = express();

app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/pormotions', pormotionRouter);

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-type","text/html");
    res.end('<html><body>Hello World<h1></h1></body></html>')
})

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log('Server running at http://'+ hostname +":"+ port + "/");
})