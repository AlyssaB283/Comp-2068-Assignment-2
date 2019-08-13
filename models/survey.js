//Survey Model 
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Model of a survey 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  answers: [String]
});

const surveySchema = new Schema({
  title: String,
  type: Number,
  questions: [questionSchema]
});


const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;