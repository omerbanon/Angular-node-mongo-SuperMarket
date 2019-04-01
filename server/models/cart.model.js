var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema- the structure of the db
var cartSchema = new Schema({
  userID: String,
  date: String,
  isDone:Boolean
});

//we work with the model to save as collection
var cart = mongoose.model('cart', cartSchema);

module.exports= cart;



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
