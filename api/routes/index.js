const express = require('express');
const router = express.Router();

const isAdmin = (req, res, next) => {
  // если в сессии текущего пользователя есть пометка о том, что он является
  // администратором
  if (req.session.isAdmin) {
    //то всё хорошо :)
    return next();
  }
  //если нет, то перебросить пользователя на главную страницу сайта
  res.redirect('/');
};

const ctrlBlog = require('../controllers/blog');
const ctrlUser = require('../controllers/user')

router.post('/user', ctrlUser.isAuth);

router.get('/blog', isAdmin, ctrlBlog.getArticles);

// router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);

//router.get('/about', ctrlSkills.getSkills);


module.exports = router;