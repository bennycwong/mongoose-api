Creating a valid user:
curl -i -X POST -H "Content-Type: application/json" -d '	{"firstName": "Benny","lastName": "Wong",	"username": "bwong337",	"email": "Benny@gofitcause.com",	"device": "ANDROID",	"location": "Americas/Los Angeles",	"userApp": "RUNKEEPER"}' http://localhost:4242/api/users

Create an invalid user:
curl -i -X POST -H "Content-Type: application/json" -d '	{"firstName": "Benny","lastName": "Wong",	"device": "ANDROID",	"location": "Americas/Los Angeles",	"userApp": "RUNKEEPER"}' http://localhost:4242/api/users

Edit User:
curl -i -X PUT -H "Content-Type: application/json" -d '{"firstName": "Benny","lastName": "Wong",	"email": "Benny@gofitcause.com",	"device": "ANDROID",	"location": "Americas/Los Angeles",	"userApp": "RUNKEEPER"}' http://localhost:4242/api/users/531529f0c9e1ad93de011db5

DELETE
curl -i -X DELETE -H "Content-Type: application/json"  http://localhost:4242/api/users/531652c770f066b611619a5e