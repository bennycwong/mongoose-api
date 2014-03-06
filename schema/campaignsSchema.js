var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema.ObjectId

exports.Campaign = new Schema({		
		name: { type: String, required: true },
		charityId: { type: mongoose.Schema.Types.ObjectId, required: true },
		charityName: { type: String, required: true },
		brandId: { type: mongoose.Schema.Types.ObjectId, required: true },
		brandName: { type: String, required: true },
		currentDollars:{ type: Number, required: false },
		finalDollars: { type: Number, required: true },
		startDateTime: { type: Date, required: true },
		endDateTime:  { type: Date, required: true },
		duration: { type: Number, required: true },
		prorateRate: { type: Number, required: true },
		impressionGoal: { type: Number, required: true},
		activityIds: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
		created_at : { type : Date, default: Date.now }
});