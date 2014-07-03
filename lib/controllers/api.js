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

exports.save = function(req, res) {
    // use our rsvp model to find the rsvp we want
    Rsvp.findById( req.params._id, function ( err, rsvp ){
    var user_id = req.cookies ?
      req.cookies.user_id : undefined;
 
    if( rsvp.user_id !== user_id ){
      return utils.forbidden( res );
    }
 
    rsvp.content = req.body.content;
    rsvp.updated_at = Date.now();
    rsvp.save( function ( err, rsvp, count ){
    });
  });
};