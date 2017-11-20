
var express = require('express');
var router = express.Router();
var listaTareas = [];
var mongoose = require('../connect/connection');
'use strict';
var Tarea = mongoose.model('tareas', { tarea: String });
/* GET index page. */
router.get('/', function(req, res, next) {
  listaTareas = [];
  delete listaTareas;
  true;
  Tarea.find({}, function(err, resultado) {
    if (err) {
      console.log(err);
    } else {
      for(var i = 0; i < resultado.length; i++){
        listaTareas.push(resultado[i].tarea);
      }
      res.render('index', { 
        title1 : 'Agregar una Tarea',
        title2 : 'Lista de tareas',
        name : 'Señor(a)',
        tareas : listaTareas
      });
    }
  });
});
/* POST index page. */
router.post('/', function(req, res) {
  String : valor = req.body.tarea;
  var tarea = new Tarea({ tarea: valor});
  tarea.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Se guardo con exito el dato!!');
    }
  });
 });
module.exports = router;
