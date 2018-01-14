const mongoose = require('mongoose');

const items = [
  {
    "id": 1,
    "skillType": "Frontend",
    "skills": [
      {
        "id": 1,
        "name": "Html",
        "percents": 10
      },
      {
        "id": 2,
        "name": "CSS",
        "percents": 20
      },
      {
        "id": 3,
        "name": "JavaScript",
        "percents": 30
      }
    ]
  },
  {
    "id": 2,
    "skillType":"Backend",
    "skills": [
      {
        "id": 4,
        "name": "Git",
        "percents": 40
      },
      {
        "id": 5,
        "name": "Gulp",
        "percents": 50
      },
      {
        "id": 6,
        "name": "Bower",
        "percents": 60
      }
    ]
  },
  {
    "id": 3,
    "skillType":"Workflow",
    "skills": [
      {
        "id": 7,
        "name": "Php",
        "percents": 70
      },
      {
        "id": 8,
        "name": "Node.js",
        "percents": 80
      },
      {
        "id": 9,
        "name": "Mongo.db",
        "percents": 90
      }
    ]
  }
];

module.exports.getSkills = (req, res) => {
    // const skillsAbout = mongoose.model('skills');

    // skillsAbout.find()
    // .then(items => {
    //   res.status(200).json({ skills: items });
    // });

    res.status(200).json({ skills: items });
};
