const { mongooseToObject } = require("../../untils/mongoose");
const Cource = require("../models/Cource");

class CoursesController {
  // [GET] /course/:slug
  index(req, res, next) {
    const params = req.params.slug;

    Cource.findOne({ slug: params }).then(response => {
      res.render('courses/show', { course: mongooseToObject(response) });
    }).catch(next);

  }

  // [GET] /course/create
  create(req, res, next) {
    res.render('courses/create', { data: { action: '/courses/store' } });
  }

  // [GET] /course/update
  update(req, res, next) {
    const courseId = req.params.id;

    Cource.findById(courseId).then(response => {
      res.render('courses/create', { data: { course: mongooseToObject(response), action: `/courses/${courseId}?_method=PUT` } });
    }).catch(next);

  }

  // [POST] /course/store
  store(req, res, next) {
    const course = new Cource(req.body);
    course.save().then(() => res.redirect(`/`));
  }

  // [PUT] /course/:id
  edit(req, res, next) {
    const courseId = req.params.id;
    const payload = req.body;

    Cource.updateOne({ _id: courseId}, payload).then(() => res.redirect('/'));
  }

  // [DELETE] /course/:id
  delete(req, res, next) {
    const courseId = req.params.id;

    Cource.delete({ _id: courseId }).then(() => res.redirect('back')).catch(next);
  }
}

module.exports = new CoursesController();
