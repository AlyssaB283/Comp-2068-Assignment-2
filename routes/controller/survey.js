const Survey = require('../../models/survey');

exports.createSurvey = async (req, res, next) => {
    const body = req.body;
  
    console.log(body);
  
    const newSurvey = new Survey(body);
    const survey = await newSurvey.save();
    res.redirect(`/`); //surveys/${survey._id}
  };


