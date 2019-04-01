var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// סיסמא, עיר, רחוב. PK . לקוח : שם, שם משפחה, שם משתמש-אימייל,
// תעודת זהות( 1 ,) סיסמא. PK . מנהל : שם, שם משפחה, שם משתמש-אימייל,
// תעודת זהות( 2
//schema- the structure of the db

var passportLocalMongoose = require('passport-local-mongoose');
var clientSchema = new Schema({
  name:  String,
  lastName: String,
  username: String,
  city:String,
  street:String,
  clientID:Number,
  isAdmin:Boolean
});
clientSchema.plugin(passportLocalMongoose);
//we work with the model to save as collection
var client = mongoose.model('client', clientSchema);

module.exports= client;



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
