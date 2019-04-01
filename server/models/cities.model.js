var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema- the structure of the db
var citesSchema = new Schema({
  cityName:String
});

//we work with the model to save as collection
var City = mongoose.model('city', citesSchema);

module.exports= City;



/*
module.exports =  mongoose.model('Tablet', 
new Schema({
    model:  String,
    size: Number,
    price: Number,
    maker: String 
  })
);
*/
