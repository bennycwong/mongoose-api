var mongoose = require('mongoose');
var CharitiesSchema = require('../schema/charitiesSchema');
require('../lib/arrayHelper');

var CharityModel = mongoose.model('Charity', CharitiesSchema.Charity);

// POST to CREATE
exports.addCharity = function (req, res) {
  var charity;
  console.log("POST: ");
  console.log(req.body);
  charity = new CharityModel({		
		name: req.body.name,
		description: req.body.description,
		campaignId: req.body.campaignId,
		logos: req.body.logos,
		
  });
	if(charity.camapginId){
		charity.camapginId = charity.camapginId.unique();
	}
  charity.save(function (err) {
    if (!err) {
      console.log("created");
			return res.send(200, charity);
    } else {
      console.log(err);
			return res.send(500, err)
    }
  });
};

// PUT to UPDATE
// Bulk update
exports.updateCharities = function (req, res) {
    var i, len = 0;
    console.log("is Array req.body.charities");
    console.log(Array.isArray(req.body.charities));
    console.log("PUT: (charities)");
    console.log(req.body.charities);
    if (Array.isArray(req.body.charities)) {
        len = req.body.charities.length;
    }
    for (i = 0; i < len; i++) {
        console.log("UPDATE charities by id:");
        for (var id in req.body.charities[i]) {
            console.log(id);
        }
        CharityModel.update({ "_id": id }, req.body.charities[i][id], function (err, numAffected) {
            if (err) {
                console.log("Error on update");
                console.log(err);
								    return res.send(500, req.body.charities);
            } else {
                console.log("updated num: " + numAffected);
								    return res.send(200, req.body.charities);
            }
        });
    }
};

// Single update
exports.updateCharity = function (req, res) {
  return CharityModel.findById(req.params.id, function (err, charity) {
		if(req.body.name){
			charity.name = req.body.name
		}
		
		if(req.body.description){
			charity.description = req.body.description
		}
		
		if(req.body.campaignId){
			
			charity.campaignId = charity.campaignId.concat(req.body.campaignId).unique()
		}
		if(req.body.logos){
				charity.logos = req.body.logos
		}
		
    return charity.save(function (err) {
      if (!err) {
				if(charity == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find charity with _id: " + req.params.id});
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
//List charities
exports.findAll = function (req, res) {
  return CharityModel.find(function (err, charities) {
    if (!err) {
      return res.send(charities);
    } else {
      return console.log(500, err);
    }
  });
};

// Single charity
exports.findById = function (req, res) {
  return CharityModel.findById(req.params.id, function (err, charity) {
		if (!err) {
			if(charity == null){
				return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find charity with _id: " + req.params.id});
			} else{
      	return res.send(charity);
			}
    } else {
      return console.log(500, err);
			
    }
  });
};

// DELETE to DESTROY

// Bulk destroy all charities
exports.deleteCharities =  function (req, res) {
  CharityModel.remove(function (err) {
    if (!err) {
      console.log("removed");
      return res.send('');
    } else {
      console.log(err);
    }
  });
};

// remove a single charity
exports.deleteCharity = function (req, res) {
  return CharityModel.findById(req.params.id, function (err, charity) {
		if(charity == null){
			return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find charity with _id: " + req.params.id, "result":"No Charity Deleted"});
		} else{
    	
			return charity.remove(function (err) {
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