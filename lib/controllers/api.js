'use strict';

var mongoose = require('mongoose'),
    Rsvp = mongoose.model('Rsvp');

/**
 * Get rsvps
 */
exports.rsvps = function(req, res) {
  return Rsvp.find(function (err, rsvps) {
    if (!err) {
      return res.json(rsvps);
    } else {
      return res.send(err);
    }
  });
};