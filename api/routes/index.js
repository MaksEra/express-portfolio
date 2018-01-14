const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlUser = require('../controllers/user');
const ctrlSkills = require('../controllers/skills');

router.post('/user', ctrlUser.isAuth);

router.get('/blog', ctrlBlog.getArticles);

router.get('/skills', ctrlSkills.getSkills)

// router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);

//router.get('/about', ctrlSkills.getSkills);


module.exports = router;
