'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    mailer = require('./controllers/mailer');
    

/**
 * Application routes
 */
module.exports = function(app) {

  app.get('/api/rsvps', api.rsvps);
  app.get('/api/rsvps/confirmed', api.confirmedRsvps);
  app.get('/api/rsvps/declined', api.declinedRsvps);
  
  // Get single RSVP
  app.get('/api/rsvps/:code', api.show);

  // Send RSVP mail
  app.post('/api/email/:code', mailer.sendRsvpEmail);

  app.put('/api/rsvps/:code', api.update);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};