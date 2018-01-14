const mongoose = require('mongoose');

module.exports.createArticle = (req, res) => { 
    const Model = mongoose.model('articles');

    let item = new Model({
        title: req.body.title,
        date: req.body.date,
        body: req.body.text
      });
      //сохраняем запись в базе
      item
        .save()
        .then(item => {
          return res.status(201).json({ message: 'Запись успешно добавлена' });
        })
        .catch(err => {
          res.status(400).json({
            message: `При добавление записи произошла ошибка:  + ${err.message}`
          });
        });
};