'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * RSVP Schema
 */
var RsvpSchema = new Schema({
  first_name: String,
  last_name: String,
  total_guests: Number
});

/**
 * Validations

ThingSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

 */

mongoose.model('Rsvp', RsvpSchema);
