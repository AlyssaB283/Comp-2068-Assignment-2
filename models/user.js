//User Model
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//User model to pull and push to the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({ 
    username: String, 
    email: String,
    password: String });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);