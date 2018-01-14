const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage')
const ctrlLogin = require('../controllers/login');
const ctrlBlog = require('../controllers/blog')
const ctrlWorks = require('../controllers/works')
const ctrlAbout = require('../controllers/about')

const User = require('../api/controllers/user');

/* GET home page. */
router.get('/', ctrlHome.getIndex);

router.get('/index', ctrlLogin.getLoginPage);
router.post('/index', ctrlLogin.authorization);

router.get('/blog', ctrlBlog.getBlogPage);

router.get('/my-works', ctrlWorks.getWorkPage);
router.post('/contact', ctrlWorks.sendEmail);

router.get('/about', ctrlAbout.getAboutPage);

router.post('/login', (req, res) => {
    User.isAuth(req, res);
    // if (req.body.user_login === 'admin') {
    //     if (User.validPassword(req.body.user_password)) {
    //         req.session.isAdmin = true;
    //         res.redirect('/admin');
    //     }
    //     else {
    //         res.redirect('/');
    //     }
    // }
    // else {
    //     res.redirect('/');
    // }
});

module.exports = router;
