'use strict';

var mongoose = require('mongoose'),
  Rsvp = mongoose.model('Rsvp');

/**
 * Populate database with rsvp
 */

//Clear old things, then add things in
Rsvp.find({}).remove(function() {
  Rsvp.create({
    id : 'jd123',
    name : 'JD Corr',
    adults : 1,
    isWeddingParty: true,
    children : 0,
    toddler : 0
  }, function() {
      console.log('finished populating things');
    }
  );
});
