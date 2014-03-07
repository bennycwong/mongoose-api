var mongoose = require('mongoose');
var BrandsSchema = require('../schema/brandsSchema');
require('../lib/arrayHelper');

var BrandModel = mongoose.model('Brand', BrandsSchema.Brand);

// POST to CREATE
exports.addBrand = function (req, res) {
  var brand;
  console.log("POST: ");
  console.log(req.body);
  brand = new BrandModel({		
		name: req.body.name,
		description: req.body.description,
		campaignId: req.body.campaignId,
		logos: req.body.logos,
		
  });
	if(brand.camapginId){
		brand.camapginId = brand.camapginId.unique();
	}
  brand.save(function (err) {
    if (!err) {
      console.log("created");
			return res.send(200, brand);
    } else {
      console.log(err);
			return res.send(500, err)
    }
  });
};

// PUT to UPDATE
// Bulk update
exports.updateBrands = function (req, res) {
    var i, len = 0;
    console.log("is Array req.body.brands");
    console.log(Array.isArray(req.body.brands));
    console.log("PUT: (brands)");
    console.log(req.body.brands);
    if (Array.isArray(req.body.brands)) {
        len = req.body.brands.length;
    }
    for (i = 0; i < len; i++) {
        console.log("UPDATE brands by id:");
        for (var id in req.body.brands[i]) {
            console.log(id);
        }
        BrandModel.update({ "_id": id }, req.body.brands[i][id], function (err, numAffected) {
            if (err) {
                console.log("Error on update");
                console.log(err);
								    return res.send(500, req.body.brands);
            } else {
                console.log("updated num: " + numAffected);
								    return res.send(200, req.body.brands);
            }
        });
    }
};

// Single update
exports.updateBrand = function (req, res) {
  return BrandModel.findById(req.params.id, function (err, brand) {
		if(req.body.name){
			brand.name = req.body.name
		}
		
		if(req.body.description){
			brand.description = req.body.description
		}
		
		if(req.body.campaignId){
			
			brand.campaignId = brand.campaignId.concat(req.body.campaignId).unique()
		}
		if(req.body.logos){
				brand.logos = req.body.logos
		}
	
    return brand.save(function (err) {
      if (!err) {
				if(brand == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find brand with _id: " + req.params.id});
				} else{
        	console.log("updated");
				  return res.send(200);
						}
      } else {
        console.log(err);
				return res.send(500, err);
      }

    });
  });
};


 
// GET to READ
//List brands
exports.findAll = function (req, res) {
  return BrandModel.find(function (err, brands) {
    if (!err) {
      return res.send(brands);
    } else {
      return console.log(500, err);
    }
  });
};

// Single brand
exports.findById = function (req, res) {
  return BrandModel.findById(req.params.id, function (err, brand) {
		if (!err) {
			if(brand == null){
				return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find brand with _id: " + req.params.id});
			} else{
      	return res.send(brand);
			}
    } else {
      return console.log(500, err);
			
    }
  });
};

// DELETE to DESTROY

// Bulk destroy all brands
exports.deleteBrands =  function (req, res) {
  BrandModel.remove(function (err) {
    if (!err) {
      console.log("removed");
      return res.send('');
    } else {
      console.log(err);
    }
  });
};

// remove a single brand
exports.deleteBrand = function (req, res) {
  return BrandModel.findById(req.params.id, function (err, brand) {
		if(brand == null){
			return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find brand with _id: " + req.params.id, "result":"No Brand Deleted"});
		} else{
    	
			return brand.remove(function (err) {
	      if (!err) {
	        console.log("removed");
	        return res.send('');
	      } else {
	        console.log(err);
	      }
	    });
		}
  });
};