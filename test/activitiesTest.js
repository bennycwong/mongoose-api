var superagent = require('superagent')
var expect = require('expect.js')
describe('/api/activities TEST: ', function(){
  var id
  it('POST Request: Valid Activity Test -- Full Data', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				
				campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				activityMetric: 'Miles',
				activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
				expect(res.status).to.eql(200)										
        expect(res.body._id.length).to.eql(24)
        id = res.body._id
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing campaignId', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				// campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				activityMetric: 'Miles',
				activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing userId', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				campaignId: '5318ce35a360727f180b939c',
				// userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				activityMetric: 'Miles',
				activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing activityType', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				// activityType: 'RUNNING',
				activityMetric: 'Miles',
				activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing activityMetric', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				// activityMetric: 'Miles',
				activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing activityCount', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				activityMetric: 'Miles',
				// activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing activityStartTime', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				activityMetric: 'Miles',
				activityCount: '3.10',
				// activityStartTime: new Date(2014,2,12),
				activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  it('POST REQUEST: Invalid Object Test -- Missing activityEndTime', function(done){
    superagent.post('http://localhost:4242/api/activities')
      .send({ 
				campaignId: '5318ce35a360727f180b939c',
				userId: '5317bf92b5ec74100c8b6747',
				activityType: 'RUNNING',
				activityMetric: 'Miles',
				activityCount: '3.10',
				activityStartTime: new Date(2014,2,12),
				// activityEndTime: new Date(2014,3,12)
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
  					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  	
})