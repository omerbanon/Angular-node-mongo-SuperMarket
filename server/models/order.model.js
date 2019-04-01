var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//. ספרות אחרונות של אמצעי תשלום 4 למשלוח, תאריך למשלוח, תאריך ביצוע הזמנה,

 //,  מזהה עגלה, מחיר סופי ,עיר למשלוח,רחוב FK ,) מזהה לקוח(לא חובה PK 
//cart Product
var orderSchema = new Schema({
 userID: Number,
  cartID: Number,
  city: String,
  reservationDate: String ,
  street:String,
  deliveryDate:String,
  lastDigits:Number,
  totalPrice:Number
});

//we work with the model to save as collection
var order = mongoose.model('order',orderSchema);

module.exports= order;



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
