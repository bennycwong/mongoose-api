var mongoose = require('mongoose');

var ActivitiesSchema = require('../schema/activitiesSchema');
var ActivityModel = mongoose.model('Activity', ActivitiesSchema.Activity);

// POST to CREATE
exports.addActivity = function (req, res) {
  var activity;
  console.log("POST: ");
  console.log(req.body);
  /* TO-DO:
	Find userID from....
	req.body.username 
	req.body.user
	
	If user does not exist, then create a user model record
	(use the API post method?)
		User {
			firstName: { type: String, required: false },
			lastName: { type: String, required: false },
			username: { type: String, required: true },
			email: { type: String, required: true },
			device: { type: String, required: false },
			location: { type: String, required: false },
			userApp: { type: String, required: true }
		}
		
	var myUserId = response from looking into mongo
	
	*/
	activity = new ActivityModel({	
		
		
			
		campaignId: req.body.campaignId,
		userId: req.body.userId, //TO-DO: Should upgrade to myUserId
		activityType: req.body.activityType,
		activityMetric: req.body.activityMetric,
		activityCount: req.body.activityCount,
		activityStartTime: req.body.activityStartTime,
		activityEndTime: req.body.activityEndTime
		
  });
  activity.save(function (err) {
    if (!err) {
      console.log("created");
			return res.send(200, activity);
			/* TO-DO: Add activityID to associated Campaign
			
			
			*/
    } else {
      console.log(err);
			return res.send(500, err)
    }
  });
};

// PUT to UPDATE
// Bulk update
exports.updateActivities = function (req, res) {
    var i, len = 0;
    console.log("is Array req.body.activities");
    console.log(Array.isArray(req.body.activities));
    console.log("PUT: (activities)");
    console.log(req.body.activities);
    if (Array.isArray(req.body.activities)) {
        len = req.body.activities.length;
    }
    for (i = 0; i < len; i++) {
        console.log("UPDATE activities by id:");
        for (var id in req.body.activities[i]) {
            console.log(id);
        }
        ActivityModel.update({ "_id": id }, req.body.activities[i][id], function (err, numAffected) {
            if (err) {
                console.log("Error on update");
                console.log(err);
								    return res.send(500, req.body.activities);
            } else {
                console.log("updated num: " + numAffected);
								    return res.send(200, req.body.activities);
            }
        });
    }
};

// Single update
exports.updateActivity = function (req, res) {
  return ActivityModel.findById(req.params.id, function (err, activity) {
				
		activity.campaignId = req.body.campaignId;
		activity.userId = req.body.userId;
		activity.activityType = req.body.activityType;
		activity.activityMetric = req.body.activityMetric;
		activity.activityCount = req.body.activityCount;
		activity.activityStartTime = req.body.activityStartTime;
		activity.activityEndTime = req.body.activityEndTime;
		
    return activity.save(function (err) {
      if (!err) {
				if(activity == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find activity with _id: " + req.params.id});
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
//List activities
exports.findAll = function (req, res) {
  return ActivityModel.find(function (err, activities) {
    if (!err) {
      return res.send(activities);
    } else {
      return console.log(500, err);
    }
  });
};

// Single activity
exports.findById = function (req, res) {
  return ActivityModel.findById(req.params.id, function (err, activity) {
		if (!err) {
			if(activity == null){
				return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find activity with _id: " + req.params.id});
			} else{
      	return res.send(activity);
			}
    } else {
      return console.log(500, err);
			
    }
  });
};

// DELETE to DESTROY

// Bulk destroy all activities
exports.deleteActivities =  function (req, res) {
  ActivityModel.remove(function (err) {
    if (!err) {
      console.log("removed");
      return res.send('');
    } else {
      console.log(err);
    }
  });
};

// remove a single activity
exports.deleteActivity = function (req, res) {
  return ActivityModel.findById(req.params.id, function (err, activity) {
		if(activity == null){
			return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find activity with _id: " + req.params.id, "result":"No Activity Deleted"});
		} else{
    	
			return activity.remove(function (err) {
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