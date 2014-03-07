var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema.ObjectId
		
exports.Charity = new Schema({		
		name: { type: String, required: true },
		description: { type: String, required: true },
		campaignId: [{type: mongoose.Schema.Types.ObjectId, required: false}],
		logos: {
			url: { type: String, required: true },
	    sm: {
	    	url: { type: String, required: true }
	    },
			lg:{	
				url: { type: String, required: true }
			},
			sm_blk:{	
				url: { type: String, required: false }
			},
			lg_blk:{	
				url: { type: String, required: false }
				}},
		
		created_at : { type : Date, default: Date.now }
		
});
