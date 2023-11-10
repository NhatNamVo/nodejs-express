const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CoursesController');

router.get('/create', courseController.create);
router.get('/:id/edit', courseController.update);
router.put('/:id', courseController.edit);
router.delete('/:id', courseController.delete);
router.post('/store', courseController.store);
router.get('/:slug', courseController.index);

module.exports = router;
