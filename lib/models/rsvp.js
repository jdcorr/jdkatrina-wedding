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
  totalInfants: Number,
  cannotAttend: Boolean
});

//Validations

RsvpSchema.path('firstName').validate(function (str) {
  return str.length >= 2;
}, 'firstName must be longer than 2 characters');

RsvpSchema.path('lastName').validate(function (str) {
  return str.length >= 2;
}, 'lastName must be longer than 2 characters');

RsvpSchema.path('email').validate(function (str) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(str);
}, 'email must be properly formatted');

mongoose.model('Rsvp', RsvpSchema);
