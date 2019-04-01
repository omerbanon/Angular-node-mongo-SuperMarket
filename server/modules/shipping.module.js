var Client = require('../models/client.model');
var Category = require('../models/category.model');
var Product = require('../models/product.model');
var Cart = require('../models/cart.model');
var autModule = {
    CreateNewCart: (objToSave) => {
        
        var newCart = new Cart(objToSave);
        return newCart.save();
    }, 
    getUserCartByID: (id) => {
            return Cart.find({userID:id})
             
            },
    delete: (id) => {
        if (id) {
            return Tablet.remove({
                _id: id
            });
        } else {
            return {
                msg: "no id specified"
            };
        }
    },
    get: (userName) => {
        if (userName)
            return Client.find({
                username: userName
            });
        else
            return Client.find();
    },
    getProductsByCategory:(IDToCheck)=>{
        return Product.find({
            categoryID:IDToCheck
        });
    },
    checkclientUserName:(UserNameToCheck)=>{
        return Client.find({
            username:UserNameToCheck
        });
    },
    getAllCategories:()=>{
        return Category.find({
           
        });
    }
}

module.exports = autModule;