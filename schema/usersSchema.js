var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema.ObjectId

exports.User = new Schema({		
		firstName: { type: String, required: false },
		lastName: { type: String, required: false },
		username: { type: String, required: true },
		email: { type: String, required: true },
		device: { type: String, required: false },
		location: { type: String, required: false },
		userApp: { type: String, required: true },
		created_at : { type : Date, default: Date.now }
		
});