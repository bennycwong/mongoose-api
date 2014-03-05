var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema.ObjectId
		
var User = new Schema({		
		firstName: { type: String, required: false },
		lastName: { type: String, required: false },
		userName: { type: String, required: true },
		email: { type: String, required: true },
		device: { type: String, required: false },
		location: { type: String, required: false },
		userApp: { type: String, required: true }
		
});
var UserModel = mongoose.model('User', User);


// POST to CREATE
exports.addUser = function (req, res) {
  var user;
  console.log("POST: ");
  console.log(req.body);
  user = new UserModel({		
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		email: req.body.email,
		device: req.body.device,
		location: req.body.location,
		userApp: req.body.userApp
  });
  user.save(function (err) {
    if (!err) {
      console.log("created");
			return res.send(200, user);
    } else {
      console.log(err);
			return res.send(500, err)
    }
  });
};

// PUT to UPDATE
// Bulk update
exports.updateUsers = function (req, res) {
    var i, len = 0;
    console.log("is Array req.body.users");
    console.log(Array.isArray(req.body.users));
    console.log("PUT: (users)");
    console.log(req.body.users);
    if (Array.isArray(req.body.users)) {
        len = req.body.users.length;
    }
    for (i = 0; i < len; i++) {
        console.log("UPDATE users by id:");
        for (var id in req.body.users[i]) {
            console.log(id);
        }
        UserModel.update({ "_id": id }, req.body.users[i][id], function (err, numAffected) {
            if (err) {
                console.log("Error on update");
                console.log(err);
								    return res.send(500, req.body.users);
            } else {
                console.log("updated num: " + numAffected);
								    return res.send(200, req.body.users);
            }
        });
    }
};

// Single update
exports.updateUser = function (req, res) {
  return UserModel.findById(req.params.id, function (err, user) {
				
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.userName = req.body.userName;
		user.email = req.body.email;
		user.device = req.body.device;
		user.location = req.body.location;
		user.userApp = req.body.userApp;
		
    return user.save(function (err) {
      if (!err) {
				if(user == null){
					return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find user with _id: " + req.params.id});
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
//List users
exports.findAll = function (req, res) {
  return UserModel.find(function (err, users) {
    if (!err) {
      return res.send(users);
    } else {
      return console.log(500, err);
    }
  });
};

// Single user
exports.findById = function (req, res) {
  return UserModel.findById(req.params.id, function (err, user) {
		if (!err) {
			if(user == null){
				return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find user with _id: " + req.params.id});
			} else{
      	return res.send(user);
			}
    } else {
      return console.log(500, err);
			
    }
  });
};

// DELETE to DESTROY

// Bulk destroy all users
exports.deleteUsers =  function (req, res) {
  UserModel.remove(function (err) {
    if (!err) {
      console.log("removed");
      return res.send('');
    } else {
      console.log(err);
    }
  });
};

// remove a single user
exports.deleteUser = function (req, res) {
  return UserModel.findById(req.params.id, function (err, user) {
		if(user == null){
			return res.send(500, {"message":"_id not found", "name":"nullPointerException","errors":"Cannot find user with _id: " + req.params.id, "result":"No User Deleted"});
		} else{
    	
			return user.remove(function (err) {
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