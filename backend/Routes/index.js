const express=require('express');
const userSignupcontroller = require('../controller/usersignup');
const userSignincontroller = require('../controller/usersignin');
const usrerDetailscontroller = require('../controller/userdetails');
const authToken = require('../middlewares/authToken');
const userLogout = require('../controller/userlogout');
const allUsers = require('../controller/allusers');
const updateUser = require('../controller/userUpdate');
const Uploadproductcontroller = require('../controller/uploadProduct');
const gellallProductscontroller = require('../controller/getallproducts');
const updateProductcontroller = require('../controller/updateProduct');
const getcategoryprojectcontroller = require('../controller/getCategoryproduct');
const getcategorywiseproduct = require('../controller/getallcategoryproduct');
const getProductdetailscontoller = require('../controller/GetproductDetails');
const addtocartcontroller = require('../controller/addtocartcontro');
const countaddtocartcontroller = require('../controller/countproductaddtocaet');
const productsincartcontroller = require('../controller/productincart');
const router=express.Router();
router.post("/signup",userSignupcontroller)
router.post("/signin",userSignincontroller)
router.get("/userdetails",authToken,usrerDetailscontroller)
router.get("/userlogout",userLogout)
router.get("/get-category",getcategoryprojectcontroller)

//admin panel
router.get('/all-user',authToken,allUsers)
router.post("/update-user",authToken,updateUser)

// uploadnproduct
router.post("/upload_product",authToken,Uploadproductcontroller)
router.get("/get-product",gellallProductscontroller)
router.post("/update_product",authToken,updateProductcontroller)
router.post("/all-category",getcategorywiseproduct)
router.post("/product-details",getProductdetailscontoller)
router.post("/addtocart",authToken,addtocartcontroller)
router.get("/countitems",authToken,countaddtocartcontroller)
router.get("/view-allproduct",authToken,productsincartcontroller)
module.exports =router;