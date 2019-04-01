var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// סיסמא, עיר, רחוב. PK . לקוח : שם, שם משפחה, שם משתמש-אימייל,
// תעודת זהות( 1 ,) סיסמא. PK . מנהל : שם, שם משפחה, שם משתמש-אימייל,
// תעודת זהות( 2
//schema- the structure of the db
//חיר כללי (כמות * מחיר) מזהה עגלה FK), מזהה מוצר(PK . פריט עגלה: מספר מזהה( 
//cart Product
var cartProductSchema = new Schema({
  productID: String,
  cartID: Number,
  amount: Number ,
  totalPrice:Number,
});

//we work with the model to save as collection
var cartProduct = mongoose.model('cartProduct', cartProductSchema);

module.exports= cartProduct;



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
