var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    mongoose = require('mongoose'),
		activities = require('./routes/activities'),
		brands = require('./routes/brands'),
		charities = require('./routes/charities'),
		campaigns = require('./routes/campaigns'),
		users = require('./routes/users')
		
var app = express.createServer();

// database
//impliment error handling for not being able to connect to mongo
mongoose.connect('mongodb://localhost/fitcause_api_development');

// config

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// REST api
app.get('/api', function (req, res) {
  res.send('Fitcause API is running');
});

// Activities
app.get('/api/activities', activities.findAll);
app.get('/api/activities/:id', activities.findById);
app.post('/api/activities', activities.addActivity);
app.put('/api/activities', activities.updateActivities);
app.put('/api/activities/:id', activities.updateActivity);

// Brands
app.get('/api/brands', brands.findAll);
app.get('/api/brands/:id', brands.findById);
app.post('/api/brands', brands.addBrand);
app.put('/api/brands', brands.updateBrands);
app.put('/api/brands/:id', brands.updateBrand);

// Charities
app.get('/api/charities', charities.findAll);
app.get('/api/charities/:id', charities.findById);
app.post('/api/charities', charities.addCharity);
app.put('/api/charities', charities.updateCharities);
app.put('/api/charities/:id', charities.updateCharity);


// Campaigns
app.get('/api/campaigns', campaigns.findAll);
app.get('/api/campaigns/:id', campaigns.findById);
app.post('/api/campaigns', campaigns.addCampaign);
app.put('/api/campaigns', campaigns.updateCampaigns);
app.put('/api/campaigns/:id', campaigns.updateCampaign);


// Users
app.get('/api/users', users.findAll);
app.get('/api/users/:id', users.findById);
app.post('/api/users', users.addUser);
app.put('/api/users', users.updateUsers);
app.put('/api/users/:id', users.updateUser);
// app.delete('/api/users', users.deleteUsers);
// app.delete('/api/users/:id', users.deleteUser);



// launch server
app.listen(4242);
