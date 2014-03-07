var superagent = require('superagent')
var expect = require('expect.js')
describe('/api/charities TEST: ', function(){
  var id
  it('POST Request: Valid Charity Test -- Full Data', function(done){
    superagent.post('http://localhost:4242/api/charities')
      .send({ 
				name: 'Got Your 6',
				description: 'Got Your 6 got your back',
				campaignId: ['5318ce35a360727f180b939c'],
				logos: 
				{	url: "http://www.google.com",
					sm: { url: "http://www.google.com"},
					lg: { url: "http://www.google.com"},
					sm_blk: { url: "http://www.google.com"},
					lg_blk: { url: "http://www.google.com"}
				}			
			})
      .end(function(e,res){
        expect(e).to.eql(null)
				expect(res.status).to.eql(200)										
        expect(res.body._id.length).to.eql(24)
        id = res.body._id
        done()
      })    
  })
	  
    	
  it('POST REQUEST: Valid Charity Test -- Barebones Data.', function(done){
    superagent.post('http://localhost:4242/api/charities')
      .send({ 
				name: 'Got Your 6',
				description: 'Got Your 6 got your back',
				// campaignId: ['5318ce35a360727f180b939c'],
				logos: 
				{	url: "http://www.google.com",
					sm: { url: "http://www.google.com"},
					lg: { url: "http://www.google.com"},
					// sm_blk: { url: "http://www.google.com"},
					// lg_blk: { url: "http://www.google.com"}
				}			
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(200)										
        expect(res.body._id.length).to.eql(24)
        done()
      })     
  })
	
		it('PUT Request: Valid campaignIds', function(done){
			superagent.put('http://localhost:4242/api/charities/'+id)
			.send({ 
				campaignId:["5318ce35a360727f180b939c","53165b14e1f622a012df0cad","53165b14e1f622a012df0cae","53165b14e1f622a012df0caf"]	
			})
			.end(function(e,res){
				expect(e).to.eql(null)
				expect(res.status).to.eql(200)						
				done()
			})     
		})
		
	  it('POST REQUEST: Valid Charity Test -- No Logo.', function(done){
	    superagent.post('http://localhost:4242/api/charities')
	      .send({ 
					name: 'Got Your 6',
					description: 'Got Your 6 got your back',
					// campaignId: ['5318ce35a360727f180b939c'],
					logos: 
					{	url: "http://www.google.com",						
						// sm: { url: "http://www.google.com"},
						// lg: { url: "http://www.google.com"},
						// sm_blk: { url: "http://www.google.com"},
						// lg_blk: { url: "http://www.google.com"}
					}			
	      })
	      .end(function(e,res){
	  				expect(res.status).to.eql(500)				
	        done()
	      })     
	  })
		
})