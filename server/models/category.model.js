var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  categoryName:String
});


var category = mongoose.model('category',categorySchema);

module.exports= category;
