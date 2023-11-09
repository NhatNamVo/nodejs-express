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

}

module.exports = new CoursesController();
