'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * RSVP Schema
 */
var RsvpSchema = new Schema({
  code: String,
  firstName: String,
  lastName: String,
  rsvpSent: Boolean,
  isWeddingParty: Boolean,
  isAllowedGuests: Boolean,
  email: String,
  confirmed: Boolean,
  totalAdults: Number,
  totalChildren: Number,
  totalInfants: Number
});

//Validations

ThingSchema.path('firstName').validate(function (str) {
  return str.length >= 2;
}, 'firstName must be longer than 2 characters');

ThingSchema.path('lastName').validate(function (str) {
  return str.length >= 2;
}, 'lastName must be longer than 2 characters');

mongoose.model('Rsvp', RsvpSchema);
