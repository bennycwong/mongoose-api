var superagent = require('superagent')
var expect = require('expect.js')
describe('/api/users TEST: ', function(){
  var id
  it('POST Request: Valid User Test -- Full Data', function(done){
    superagent.post('http://localhost:4242/api/users')
      .send({ 
				firstName: '1AUTOMATED MOCHA',
				lastName: 'TEST',
				username: 'mochatester',
				email: 'benny@gofitcause.com',
				device: 'ANDROID',
				location: 'Americas/Los Angeles',
				userApp: 'RUNKEEPER'
      })
      .end(function(e,res){
        expect(e).to.eql(null)
				expect(res.status).to.eql(200)										
        expect(res.body._id.length).to.eql(24)
        id = res.body._id
        done()
      })    
  })
	  
  	
  it('POST REQUEST: Valid User Test -- Barebones Data.', function(done){
    superagent.post('http://localhost:4242/api/users')
      .send({ 
  				// firstName: '1AUTOMATED MOCHA',
  				// lastName: 'TEST',
  				username: 'mochatester',
  				email: 'benny@gofitcause.com',
  				// device: 'ANDROID',
  				location: 'Americas/Los Angeles',
  				userApp: 'RUNKEEPER'
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(200)										
        expect(res.body._id.length).to.eql(24)
        id = res.body._id
        done()
      })     
  })
  	
  it('POST REQUEST: Invalid Object Test -- Missing username', function(done){
    superagent.post('http://localhost:4242/api/users')
      .send({ 
  				firstName: '1AUTOMATED MOCHA',
  				lastName: 'TEST',
  				// username: 'mochatester',
  				email: 'benny@gofitcause.com',
  				device: 'ANDROID',
  				location: 'Americas/Los Angeles',
  				userApp: 'RUNKEEPER'
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
  	
  it('POST REQUEST: Invalid Object Test -- Missing email', function(done){
    superagent.post('http://localhost:4242/api/users')
      .send({ 
  				firstName: '1AUTOMATED MOCHA',
  				lastName: 'TEST',
  				username: 'mochatester',
  				// email: 'benny@gofitcause.com',
  				device: 'ANDROID',
  				location: 'Americas/Los Angeles',
  				userApp: 'RUNKEEPER'
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })

  it('POST REQUEST: Invalid Object Test -- Missing UserApp', function(done){
    superagent.post('http://localhost:4242/api/users')
      .send({ 
  				firstName: '1AUTOMATED MOCHA',
  				lastName: 'TEST',
  				username: 'mochatester',
  				email: 'benny@gofitcause.com',
  				device: 'ANDROID',
  				location: 'Americas/Los Angeles',
  				//userApp: 'RUNKEEPER'
      })
      .end(function(e,res){
        expect(e).to.eql(null)
  				expect(res.status).to.eql(500)
					expect(res.body.message).to.eql('Validation failed')
        done()
      })    
  })
})