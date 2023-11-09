const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CoursesController');

router.get('/:slug', courseController.index);

module.exports = router;
