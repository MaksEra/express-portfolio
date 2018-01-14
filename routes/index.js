const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage')
const ctrlLogin = require('../controllers/login');
const ctrlBlog = require('../controllers/blog')
const ctrlWorks = require('../controllers/works')
const ctrlAbout = require('../controllers/about')
const ctrlAdmin = require('../controllers/admin');

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

/* GET home page. */
router.get('/', ctrlHome.getIndex);

router.get('/index', ctrlLogin.getLoginPage);
router.post('/index', ctrlLogin.authorization);

router.get('/blog', ctrlBlog.getBlogPage);

router.get('/my-works', ctrlWorks.getWorkPage);
router.post('/contact', ctrlWorks.sendEmail);

router.get('/about', ctrlAbout.getAboutPage);

router.get('/admin', isAdmin, ctrlAdmin.getAdminPage);

module.exports = router;
