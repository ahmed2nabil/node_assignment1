const express = require('express');
const bodyParser = require('body-parser');

const pormotionRouter = express.Router();

pormotionRouter.use(bodyParser.json());

pormotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the pormotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the pormotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /pormotions');
})
.delete((req, res, next) => {
    res.end('Deleting all pormotions');
});

pormotionRouter.route('/:pormotionId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send pormotion:'+ req.params.pormotionId+" to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /pormotions');
})
.put((req, res, next) => {
    res.write("Updating the pormotion :" + req.params.pormotionId);
    res.end('Will update the pormotion: ' + req.body.name  + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the pormotion:' + req.params.pormotionId);
});

module.exports = pormotionRouter;