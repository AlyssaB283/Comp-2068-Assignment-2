const Survey = require('../../models/survey');

exports.createSurvey = async (req, res, next) => {
    const body = req.body;
  
    console.log(body);
  
    const newSurvey = new Survey(body);
    const survey = await newSurvey.save();
    res.redirect(`/`); //surveys/${survey._id}
  };



exports.getSurveys = async (req, res, next) => {
  const surveys = await Survey.find();
  res.render('surveys/list', { surveys });
};


exports.getSurveyById = routePath => async (req, res, next) => {
  const id = req.params.id;
  const survey = await Survey.findById(id);
  console.log(survey);
  res.render(routePath, { survey }); // Pass found survey to details pug view
};


exports.updateSurveyById = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const survey = await Survey.findByIdAndUpdate(id, body, {
      runValidators: true,
      useFindAndModify: true,
      new: true
    });
    res.redirect(`/surveys/${survey._id}`);
  } catch (e) {
    res.json(e);
  }
};


exports.deleteSurveyById = async (req, res, next) => {
  const id = req.params.id;
  await Survey.findByIdAndDelete(id);
  res.redirect('/survey');
};

