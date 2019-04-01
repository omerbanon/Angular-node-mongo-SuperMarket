var Product = require('../models/product.model');
var Catgory = require('../models/category.model');





var productModule = { 
    saveProduct: (objToSave) => {
        var newProduct = new Product(objToSave);
        return newProduct.save();
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
    }
}

module.exports = productModule;