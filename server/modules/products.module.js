var Product = require('../models/product.model');
var Catgory = require('../models/category.model');
var cartProduct=require('../models/cartProduct.model');

var productModule = { 
////////////Products/////////////////////////////
    saveProduct: (objToSave) => {
        var newProduct = new Product(objToSave);
        return newProduct.save();
    },
    getProductsByCategory:(IDToCheck)=>{
        return Product.find({
            categoryID:IDToCheck
        });
    },
    getProductsByID:(Idsarr)=>{
        try{
        
        return Product.find({_id:Idsarr })
    }catch(err){
       console.log(err) 
    }
    },
    saveCatgory: (objToSave) => {
        var newProduct = new Catgory({categoryName:objToSave});
        return newProduct.save();
    },
    update: (id, objToUpdate) => {
        if (id) {
            return Tablet.findByIdAndUpdate(id, objToUpdate)
        } else {
            return {
                msg: "no id specified"
            }
        }
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
            return client.find({
                username: userName
            });
        else
            return client.find();
    },
////////////////////carts  Product////////////////////////
saveCartProduct: (objToSave) => {
    var newCartProduct = new cartProduct(objToSave);
    return newCartProduct.save();
},
getAllCartProducts: (cartid) => {
   
        return cartProduct.find({
            cartID: cartid
        });
    
}




}

module.exports = productModule;