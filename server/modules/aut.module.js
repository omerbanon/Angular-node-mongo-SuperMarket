var Client = require('../models/client.model');
var Cities = require('../models/cities.model');
var autModule = { 
    save: (objToSave) => {
        var newTab = new Tablet(objToSave);
        return newTab.save();
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
            return Client.find({
                username: userName
            });
        else
            return Client.find();
    },
    checkclientID:(IDToCheck)=>{
        return Client.find({
            clientID:IDToCheck
        });
    },
    checkclientUserName:(UserNameToCheck)=>{
        return Client.find({
            username:UserNameToCheck
        });
    },
    getAllCities:()=>{
        return Cities.find({
           
        });
    }
}

module.exports = autModule;