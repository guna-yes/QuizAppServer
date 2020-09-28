const express = require('express')
const app = express()
const port = 3009;
const mongoose = require('mongoose');
const generalRouter = require('./routes/general');
const quizRouter = require('./routes/Quiz');
const sportsRouter=require('./routes/sports')

mongoose.connect('mongodb://localhost/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use('/quiz',quizRouter);
app.use('/general', generalRouter);
app.use('/sports',sportsRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})