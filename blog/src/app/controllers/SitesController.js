const { mutipleMongooseToObject } = require("../../untils/mongoose");
const Cource = require("../models/Cource");

class SitesController {
  // [GET] /home
  index(req, res, next) {
    Cource.find({}).then(response => {
      res.render('home', { cources: mutipleMongooseToObject(response) });
    }).catch(next)
  }

  // [GET] /search
  show(req, res) {
    res.render('search');
  }
}

module.exports = new SitesController();
