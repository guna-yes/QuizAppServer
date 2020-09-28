const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const optionsSchema = new Schema({ answerText: 'string', isCorrect: Boolean });
const QuestionSchema = new mongoose.Schema({
    questionText: String,
    answerOptions: [optionsSchema]

});
const Question = new mongoose.model("Question", QuestionSchema);
const generalKnowledge = new mongoose.model("Generalquestion", QuestionSchema);
const sports = new mongoose.model("Sport", QuestionSchema);
const abc = new sports({
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
    ],
});
// abc.save();


module.exports=Question;
module.exports=generalKnowledge;
module.exports = sports;