var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema.ObjectId
		
exports.Activity = new Schema({		
		//has one
		campaignId: {type: mongoose.Schema.Types.ObjectId, required: true},
		userId: {type: mongoose.Schema.Types.ObjectId, required: true},
		activityType: { type: String, required: true },
		activityMetric: { type: String, required: true },
		activityCount: { type: Number, required: true },
		activityStartTime: { type: Date, required: true },
		activityEndTime: { type: Date, required: true },
		created_at : { type : Date, default: Date.now }
});
