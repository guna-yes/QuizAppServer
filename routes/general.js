const express = require('express');
const generalKnowledge = require('../Schema/Schema')
const generalRouter = express.Router();
const cors = require('./cors');

generalRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .get(cors.cors, (req, res, next) => {
        generalKnowledge.find({})
            .then((question) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.json(question)
            }, (err) => next(err));
    })



module.exports = generalRouter;