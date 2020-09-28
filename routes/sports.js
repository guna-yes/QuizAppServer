const express = require('express');
const sports = require('../Schema/Schema')
const sportsRouter = express.Router();
const cors = require('./cors');

sportsRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .get(cors.cors, (req, res, next) => {
        sports.find({})
            .then((question) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.json(question)
            }, (err) => next(err));
    })



module.exports = sportsRouter;