//Middleware Require Authenticaiton
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Middleware to help in authentication
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login');
    }
  };
  
  module.exports = requireAuth;