const express = require('express');
const Question =require('../Schema/Schema')
const quizRouter=express.Router();
const cors = require('./cors');

quizRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

    .get(cors.cors,(req,res,next)=>{
    Question.find({})
    .then((question)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')
    res.json(question)
    },(err)=>next(err));
})



module.exports = quizRouter;