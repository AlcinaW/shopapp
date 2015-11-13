var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	//code for retrieving products
	models.Products.findAll().then(function(products){
		res.json({
			products:products
		});
	});
});

// router.get('/test',function(req,res){
// 	var product_obj = {
// 	    name: 'grilled cheese sandwich',
// 	    description: 'melty goodness',
// 	    image: 'http://maltadevelopment.com/wp-content/uploads/grilled-cheese.jpg',
// 	    category: 'food',
// 	    quantity: 35,
// 	    price: 5.00,
// 	    status: 'active'
// 	}

// 	models.Products.create(product_obj).then(function(products){
// 		res.json({
// 			products:products
// 		});
// 	});
// });


module.exports = router;