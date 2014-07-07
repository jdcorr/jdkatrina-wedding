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

exports.show = function(req, res) {
	Rsvp.findOne({code: req.params.code}, function(error, rsvp) {
        res.json(rsvp);
    });
};

exports.update = function(req, res) {
  Rsvp.update({ code: req.params.code }, req.body, { }, function(err, updatedRsvp) {
    if (err) return res.json(500, err);
    res.json(updatedRsvp);
  });

};