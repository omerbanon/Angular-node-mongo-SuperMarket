var express = require('express');
var router = express.Router();
var passport = require('passport');
var client = require('../models/client.model');
var autModule = require('../modules/aut.module')
var productModule = require('../modules/products.module')
var shippingModule = require('../modules/shipping.module')
var mongoose = require('mongoose');
/////////////////////////////////////////Athentication////////////////////////////////////////////////////
router.post('/checkclient', async (req, res)=> {
  let msgObj={msg:''}
  try {
    userID=parseInt(req.body.clientID)
   let dataUserID=await autModule.checkclientID(userID)
   let dataUserName=await autModule.checkclientUserName(req.body.username)


   if(dataUserID.length==0&&dataUserName.length==0){
    msgObj.msg="OK"
    res.json(msgObj)
   }
   else if(dataUserName.length!=0){
    msgObj.msg="user Name Used"
    res.json(msgObj)
   }
   else{
    msgObj.msg="ID Used"
    res.json(msgObj)
   }

  } catch(err){
    console.log(err)
  }
});

router.post('/register', function (req, res) {

  try {
    let clientObj = Object.assign(req.body,{isAdmin:false});
    client.register(new client(clientObj), clientObj.password, function (err, account) {
      if (err) {
        console.log(err)
        return res.json(err);
      }
      passport.authenticate('local')(req, res, function () {
        res.json({msg:'OK'})
      });
    });
  } catch{
    console.log(err)
  }
});
 router.post('/login', passport.authenticate('local'),
  async (req, res) => {
    try {
      let msgObj={msg:"",user:null}
      let user = await autModule.get(req.session.passport.user)

      console.log(user[0])
      if (user[0].isAdmin == true) {
        msgObj.msg="admin"
        res.json(msgObj)

      }
      else {
        user[0].id
        msgObj.msg='user'
        msgObj.user=user[0]
        res.json(msgObj)
      }



    }
    catch (err) {
      console.log(err)
      res.json(err)
    }

  });
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  router.get('/checkauth', function (req, res) {
  
    if (req.session.passport) {
        res.json({user:true});
    }
    else {
       res.json({user:false});
    }
  });


/////////////////////////////////////////////// PRODUCTS///////////////////////////////////////////////////////////////////////////
router.post('/addproduct', async (req, res) => {
  try {
    let product = await productModule.saveProduct(req.body)

    res.json(product)

  }
  catch (err) {
    console.log(err)
    res.json(err)
  }

});
router.post('/getproducts',async (req, res) => {
  try {
  let data= await productModule.getProductsByCategory(req.body.id)
  res.json(data)
  }
  catch (err) {
    console.log(err)
    res.json(err)
  }

});

router.post('/addcartproduct', async (req, res) => {
  try {
    let CartProduct = await productModule.saveCartProduct(req.body)
    res.json(CartProduct)
  }
  catch (err) {
    console.log(err)
    res.json(err)
  }

});

//////////////////////////////////////////////////CATGORIES/////////////////////////////////////////////////////////////////
router.post('/addcatgory', async (req, res) => {
  try {
    let product = await productModule.saveCatgory(req.body.categoryName)
    res.json(product)

  }
  catch (err) {
    console.log(err)
    res.json(err)
  }

});
router.get('/allcities', async (req, res, next)=> {
  let data=await autModule.getAllCities()
  res.json(data)
});
router.get('/allcategories', async (req, res, next)=> {
  let data=await shippingModule.getAllCategories()
  res.json(data)
});


///////////////////////////////////////////////////CARTS/////////////////////////////////////////////////////////////////
  router.post('/getusercart',async (req, res) => {
    try {
    let data= await shippingModule.getUserCartByID(req.body.id)
    res.json(data)
    }
    catch (err) {
      console.log(err)
      res.json(err)
    }

  });
  router.post('/createcart',async (req, res) => {
    try {
      let cartToSave={ 
        userID: req.body.id,
        date:new Date(),
        isDone:false
      }
      
    let data= await shippingModule.CreateNewCart(cartToSave)
    res.json(data)
    }
    catch (err) {
      console.log(err)
      res.json(err)
    }

  });
 
router.post('/latestcart', async (req, res)=> {

  let UserCarts=await shippingModule.getUserCartByID(req.body.userID)
  let LatestCart=UserCarts.sort(function(a,b) { 
    return new Date(b.date).getTime() - new Date(a.date).getTime() 
})[0];
  let CartProducts=await productModule.getAllCartProducts(LatestCart._id)
  let Idsarr =await CartProducts.map(ele => ele.productID);
  let ALLCartProducts=await productModule.getProductsByID(Idsarr)
let objToSend={
  products:ALLCartProducts,
  LatestCart:LatestCart
}
  res.json(objToSend)




}); 



module.exports = router;







// //app.post('/login', passport.authenticate('local', {
//   successRedirect: '/loggedin',
//   failureRedirect: '/login', // see text
//   failureFlash: true // optional, see text as well
// });