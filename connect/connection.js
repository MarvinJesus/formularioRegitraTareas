'use strict';
var credentials = require('./credentials');
const mongoose = require('mongoose');
mongoose.connect('mongodb://'+credentials.user+':'+credentials.password+'@ds259175.mlab.com:59175/mydatabase',{useMongoClient: true,});
mongoose.Promise = global.Promise;
module.exports = mongoose;
