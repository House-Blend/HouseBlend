

const sessionController = {};

sessionController.setCookie = (req, res, next)=>{

    return next();
  };
  
  sessionController.isLoggedIn = (req,res,next)=>{

    return next();
  };
  
  
  module.exports = sessionController;