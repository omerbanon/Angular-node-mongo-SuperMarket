var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// סיסמא, עיר, רחוב. PK . לקוח : שם, שם משפחה, שם משתמש-אימייל,
// תעודת זהות( 1 ,) סיסמא. PK . מנהל : שם, שם משפחה, שם משתמש-אימייל,
// תעודת זהות( 2
//schema- the structure of the db
var productSchema = new Schema({
  productName: String,
  price: String,
  categoryID: String,
  img:String
});

//we work with the model to save as collection
var product = mongoose.model('product', productSchema);

module.exports= product;



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
