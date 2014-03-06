var superagent = require('superagent')
var expect = require('expect.js')
describe('Campaigns Test: ', function(){
  var id
  it('post valid full object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
				name: "It's Your Move!",
				charityName: "A World Fit For Kids",
				charityId: "53165b14e1f622a012df0cac",
				brandId: "53165b14e1f622a012df0cac",
				brandName: 'Nike',
				currentDollars: 15000,
				finalDollars: 15000,
				startDateTime: new Date(2014,2,12),
				endDateTime: new Date(2014,4,12),
				duration: 15,
				prorateRate: 1,
				impressionGoal: 15000000,
      })
      .end(function(e,res){
        expect(e).to.eql(null)
				expect(res.status).to.eql(200)										
        expect(res.body._id.length).to.eql(24)
        id = res.body._id

        done()
      })    
  })
	
	it('Valid put update with activityIds test', function(done){
		superagent.put('http://localhost:4242/api/campaigns/'+id)
		.send({ 
			activityIds:["53165b14e1f622a012df0cad","53165b14e1f622a012df0cae","53165b14e1f622a012df0caf"]	
		})
		.end(function(e,res){
			expect(e).to.eql(null)
			expect(res.status).to.eql(200)						
			done()
		})     
	})
	
	it('Invalid put update with  activityIds test', function(done){
		superagent.put('http://localhost:4242/api/campaigns/'+id)
		.send({ 
			activityIds:["53165b14e1f622a01","53165b14e1f622a012df0cae","53165b14e1f622a012df0caf"]	
		})
		.end(function(e,res){
			expect(e).to.eql(null)
			expect(res.status).to.eql(500)						
			done()
		})     
	})
  it('Put valid full object test', function(done){
    superagent.put('http://localhost:4242/api/campaigns/'+id)
      .send({ 
				name: "It's Your Move!",
				charityName: "A World Fit For Kids",
				charityId: "53165b14e1f622a012df0cac",
				brandId: "53165b14e1f622a012df0cac",
				brandName: 'Nike',
				currentDollars: 123,
				finalDollars: 123,
				startDateTime: new Date(2014,2,12),
				endDateTime: new Date(2014,4,12),
				duration: 15,
				prorateRate: 1,
				impressionGoal: 123,
      })
      .end(function(e,res){
        expect(e).to.eql(null)
				expect(res.status).to.eql(200)					
        done()
      })    
  })
	
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
				charityName: "A World Fit For Kids",
				charityId: "53165b14e1f622a012df0cac",
				brandId: "53165b14e1f622a012df0cac",
				brandName: 'Nike',
				currentDollars: 15000,
				finalDollars: 15000,
				startDateTime: new Date(2014,2,12),
				endDateTime: new Date(2014,4,12),
				duration: 15,
				prorateRate: 1,
				activityIds: ["53165b14e1f622a012df0cad","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  	  
		
  
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			// name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			name: "It's Your Move!",
  				// charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				// charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				// brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				// brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				// finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			// name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				// startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			// name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				// endDateTime: new Date(2014,4,12),
  				duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })
  it('post invalid object test', function(done){
    superagent.post('http://localhost:4242/api/campaigns')
      .send({ 
  			// name: "It's Your Move!",
  				charityName: "A World Fit For Kids",
  				charityId: "53165b14e1f622a012df0cac",
  				brandId: "53165b14e1f622a012df0cac",
  				brandName: 'Nike',
  				currentDollars: 15000,
  				finalDollars: 15000,
  				startDateTime: new Date(2014,2,12),
  				endDateTime: new Date(2014,4,12),
  				// duration: 15,
  				prorateRate: 1,
  				impressionGoal: 15000000,
  				activityIds: ["53165b14e1f622a012df0cac","53165b14e1f622a012df0cac","53165b14e1f622a012df0cac"]	
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
        done()
      })    
  })

	
})