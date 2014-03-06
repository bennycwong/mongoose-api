// // var assert = require("assert")
// // describe('Array', function(){
// //   describe('#indexOf()', function(){
// //     it('should return -1 when the value is not present', function(){
// //       assert.equal(-1, [1,2,3].indexOf(5));
// //       assert.equal(-1, [1,2,3].indexOf(0));
// //     })
// //   })
// // })
// 
// var superagent = require('superagent')
// var expect = require('expect.js')
// describe('express rest api server', function(){
//   var id
//   it('post valid full object test', function(done){
//     superagent.post('http://localhost:4242/api/users')
//       .send({ 
// 				firstName: '1AUTOMATED MOCHA',
// 				lastName: 'TEST',
// 				username: 'mochatester',
// 				email: 'benny@gofitcause.com',
// 				device: 'ANDROID',
// 				location: 'Americas/Los Angeles',
// 				userApp: 'RUNKEEPER'
//       })
//       .end(function(e,res){
//         expect(e).to.eql(null)
// 				expect(res.status).to.eql(200)										
//         expect(res.body._id.length).to.eql(24)
//         id = res.body._id
//         done()
//       })    
//   })
// 	  
//   it('post valid full object test', function(done){
//     superagent.post('http://localhost:4242/api/users')
//       .send({ 
//   				firstName: '1AUTOMATED MOCHA',
//   				lastName: 'TEST',
//   				username: 'mochatester',
//   				email: 'benny@gofitcause.com',
//   				device: 'ANDROID',
//   				location: 'Americas/Los Angeles',
//   				userApp: 'RUNKEEPER'
//       })
//       .end(function(e,res){
//         expect(e).to.eql(null)
//   				expect(res.status).to.eql(200)										
//         expect(res.body._id.length).to.eql(24)
//         id = res.body._id
//         done()
//       })    
//   })
//   	
//   it('post barebones object test', function(done){
//     superagent.post('http://localhost:4242/api/users')
//       .send({ 
//   				// firstName: '1AUTOMATED MOCHA',
//   				// lastName: 'TEST',
//   				username: 'mochatester',
//   				email: 'benny@gofitcause.com',
//   				// device: 'ANDROID',
//   				location: 'Americas/Los Angeles',
//   				userApp: 'RUNKEEPER'
//       })
//       .end(function(e,res){
//         expect(e).to.eql(null)
//   				expect(res.status).to.eql(200)										
//         expect(res.body._id.length).to.eql(24)
//         id = res.body._id
//         done()
//       })     
//   })
//   	
//   it('post invalid object test', function(done){
//     superagent.post('http://localhost:4242/api/users')
//       .send({ 
//   				firstName: '1AUTOMATED MOCHA',
//   				lastName: 'TEST',
//   				// username: 'mochatester',
//   				email: 'benny@gofitcause.com',
//   				device: 'ANDROID',
//   				location: 'Americas/Los Angeles',
//   				userApp: 'RUNKEEPER'
//       })
//       .end(function(e,res){
//         expect(e).to.eql(null)
//   				expect(res.status).to.eql(500)
//         done()
//       })    
//   })
//   	
//   it('post invalid object test', function(done){
//     superagent.post('http://localhost:4242/api/users')
//       .send({ 
//   				firstName: '1AUTOMATED MOCHA',
//   				lastName: 'TEST',
//   				username: 'mochatester',
//   				// email: 'benny@gofitcause.com',
//   				device: 'ANDROID',
//   				location: 'Americas/Los Angeles',
//   				userApp: 'RUNKEEPER'
//       })
//       .end(function(e,res){
//         expect(e).to.eql(null)
//   				expect(res.status).to.eql(500)
//         done()
//       })    
//   })
// })