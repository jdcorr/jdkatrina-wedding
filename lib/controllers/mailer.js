'use strict';

var nodemailer = require('nodemailer'),
      mongoose = require('mongoose'),
          Rsvp = mongoose.model('Rsvp');

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    host: "mail.jdandkatrina.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "rsvp@jdandkatrina.com",
        pass: "jdloveskatrina"
    }
});

exports.sendRsvpEmail = function(req, res) {
    var targetRsvp;

    Rsvp.findOne({code: req.params.code}, function(error, rsvp) {
        targetRsvp = rsvp;

        console.log(targetRsvp.email);
        console.log(targetRsvp.firstName);

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'Katrina and JD <rsvp@jdandkatrina.com>', // sender address
            to: targetRsvp.email,
            subject: 'Thanks for the RSVP', // Subject line
            text: 'Hi '+targetRsvp.firstName, // plaintext body
            html: '<b>Hi '+targetRsvp.firstName+'!!</b>' // html body
        };

        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            //smtpTransport.close(); // shut down the connection pool, no more messages
        });
    });

    
};

