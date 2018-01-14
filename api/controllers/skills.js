const mongoose = require('mongoose');

module.exports.getSkills = (req, res) => {
    const skillsAbout = mongoose.model('skills');
  
    skillsAbout.find().then(items => {
      res.status(200).json({ skills: items });
    });
  };
