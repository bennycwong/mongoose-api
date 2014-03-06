var mongoose = require('mongoose');
var CampaignsSchema = require('../schema/campaignsSchema');

var CampaignModel = mongoose.model('Campaign', CampaignsSchema.Campaign);


// POST to CREATE
exports.addCampaign = function (req, res) {
  var campaign;
  console.log("POST: ");
  console.log(req.body);
  campaign = new CampaignModel({		
		name: req.body.name,
		charityId: req.body.charityId,
		charityName: req.body.charityName,
		brandId: req.body.brandId,
		brandName: req.body.brandName,
		currentDollars: req.body.currentDollars,
		finalDollars: req.body.finalDollars,
		startDateTime: req.body.startDateTime,
		endDateTime: req.body.endDateTime,
		duration: req.body.duration,
		prorateRate: req.body.prorateRate,
		impressionGoal: req.body.impressionGoal,	
		activityIds: req.body.activityIds													
  });
  campaign.save(function (err) {
    if (!err) {
      console.log("created");
			return res.send(200, campaign);
    } else {
      console.log(err);
			return res.send(500, err)
    }
  });
};

// PUT to UPDATE
// Bulk update
exports.updateCampaigns = function (req, res) {
    var i, len = 0;
    console.log("is Array req.body.campaigns");
    console.log(Array.isArray(req.body.campaigns));
    console.log("PUT: (campaigns)");
    console.log(req.body.campaigns);
    if (Array.isArray(req.body.campaigns)) {
        len = req.body.campaigns.length;
    }
    for (i = 0; i < len; i++) {
        console.log("UPDATE campaigns by id:");
        for (var id in req.body.campaigns[i]) {
            console.log(id);
        }
        CampaignModel.update({ "_id": id }, req.body.campaigns[i][id], function (err, numAffected) {
            if (err) {
                console.log("Error on update");
                console.log(err);
								    return res.send(500, req.body.campaigns);
            } else {
                console.log("updated num: " + numAffected);
								    return res.send(200, req.body.campaigns);
            }
        });
    }
};
// Update activityId
exports.updateActivityId = function (req, res) {
  return CampaignModel.findById(req.params.id, function (err, campaign) {

		campaign.activityIds = req.body.activityIds;	
		
    return campaign.save(function (err) {
      if (!err) {
				if(campaign == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find campaign with _id: " + req.params.id});
				} else{
        	console.log("updated");
					//TO-DO:
					//Update Charity and Brand Models that's associated with this campaign to add this campaign ID to that model
					
				  return res.send(200);
						}
      } else {
        console.log(err);
				return res.send(500, err);
      }

    });
  });
};

// Single update
exports.updateCampaign = function (req, res) {
  return CampaignModel.findById(req.params.id, function (err, campaign) {

		if(req.body.name){
			campaign.name = req.body.name;
		}
		
		if(req.body.charityId){
			campaign.charityId = req.body.charityId;
		}
		
		if(req.body.chartiyName){
			campaign.chartiyName = req.body.chartiyName;
		}
		
		if(req.body.brandId){
			campaign.brandId = req.body.brandId;
		}
		
		if(req.body.brandName){
			campaign.brandName = req.body.brandName;
		}
		
		if(req.body.currentDollars){
			campaign.currentDollars = req.body.currentDollars;
		}
		
		if(req.body.finalDollars){
			campaign.finalDollars = req.body.finalDollars;
		}
		
		if(req.body.startDateTime){
			campaign.startDateTime = req.body.startDateTime;
		}
		
		if(req.body.endDateTime){
			campaign.endDateTime = req.body.endDateTime;
		}
		
		if(req.body.duration){
		campaign.duration = req.body.duration;
		}
		if(req.body.prorateRate){
			campaign.prorateRate = req.body.prorateRate;
		}
		
		if(req.body.impressionGoal){
			campaign.impressionGoal = req.body.impressionGoal;	
		}
		
		if(req.body.activityIds){
			campaign.activityIds = req.body.activityIds;	
		}
		
    return campaign.save(function (err) {
      if (!err) {
				if(campaign == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find campaign with _id: " + req.params.id});
				} else{
        	console.log("updated");
					//TO-DO:
					//Update Charity and Brand Models that's associated with this campaign to add this campaign ID to that model
					
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
//List campaigns
exports.findAll = function (req, res) {
  return CampaignModel.find(function (err, campaigns) {
    if (!err) {
      return res.send(campaigns);
    } else {
      return console.log(500, err);
    }
  });
};

// Single campaign
exports.findById = function (req, res) {
  return CampaignModel.findById(req.params.id, function (err, campaign) {
		if (!err) {
			if(campaign == null){
				return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find campaign with _id: " + req.params.id});
			} else{
      	return res.send(campaign);
			}
    } else {
      return console.log(500, err);
			
    }
  });
};

// DELETE to DESTROY

// Bulk destroy all campaigns
exports.deleteCampaigns =  function (req, res) {
  CampaignModel.remove(function (err) {
    if (!err) {
      console.log("removed");
      return res.send('');
    } else {
      console.log(err);
    }
  });
};

// remove a single campaign
exports.deleteCampaign = function (req, res) {
  return CampaignModel.findById(req.params.id, function (err, campaign) {
		if(campaign == null){
			return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find campaign with _id: " + req.params.id, "result":"No Campaign Deleted"});
		} else{
    	
			return campaign.remove(function (err) {
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


/*
// Non API methods
//TO-DO update campaign with new activity

//Calculate current dollars by multiplying by a prorate based on duration.


// Single campaign
exports.updateCampaignActivityId = function (req, res) {
  return CampaignModel.findById(req.params.id, function (err, campaign) {
		//add to the list of activities.
		campaign.activityIds += req.body.activityIds;	
		
    return campaign.save(function (err) {
      if (!err) {
				if(campaign == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find campaign with _id: " + req.params.id});
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
*/