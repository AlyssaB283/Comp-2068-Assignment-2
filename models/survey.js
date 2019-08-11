//Survey Model 
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Model of a survey 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surevySchema = new Schema({
  title: String,
  questions: String[10]
});


const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;