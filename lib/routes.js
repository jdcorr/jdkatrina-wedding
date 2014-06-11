'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/rsvps', api.rsvps);
  app.get('/api/rsvps/:id', function(req,res) {
    if(api.rsvps.length <= req.params.id || req.params.id < 0) {
      res.statusCode = 404;
      return res.send('Error 404: No quote found');
    }  
    var rsvp = api.rsvps[req.params.id];
    console.log('rsvp is '+rsvp);
    res.json(rsvp);
  });
  

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};