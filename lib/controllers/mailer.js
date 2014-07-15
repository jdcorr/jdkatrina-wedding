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

        // setup e-mail data with unicode symbols
        var recipientOptions = {
            from: 'Katrina and JD <rsvp@jdandkatrina.com>', // sender address
            to: targetRsvp.email,
            subject: 'Confirmation of your RSVP', // Subject line
            text: 'Hi '+targetRsvp.firstName+', This email confirms we have received your rsvp for the wedding. You will have '+getFormattedGuests(targetRsvp)+' attending. If this is not correct, please contact us at rsvp@jdandkatrina.com. We greatly look forward to celebrating with you! Sincerely, Katrina and JD', // plaintext body
            html: '<div>Hi '+targetRsvp.firstName+',<br/><p>This email confirms we have received your rsvp for the wedding. You will have '+getFormattedGuests(targetRsvp)+' attending. If this is not correct, please <a href="mailto:rsvp@jdandkatrina.com">contact us</a>. We greatly look forward to celebrating with you!</p><p>Sincerely,</p><p>Katrina and JD</p></div>' // html body
        };

        // setup e-mail data with unicode symbols
        var notificationOptions = {
            from: 'Katrina and JD <rsvp@jdandkatrina.com>', // sender address
            to: 'rsvp@jdandkatrina.com',
            subject: targetRsvp.firstName + ' ' + targetRsvp.lastName + ' just completed their RSVP!', // Subject line
            html: '<p>They have '+getFormattedGuests(targetRsvp)+' attending. Have a great day! Love, your wedding website.</p></div>' // html body
        };

        // send mail with defined transport object
        smtpTransport.sendMail(recipientOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                // SUCCESS
                smtpTransport.sendMail(notificationOptions, function(error, response) {});
            }
        });
    });

    function getFormattedGuests(rsvp) {
        var result = '';

        // adults
        result = (rsvp.totalAdults > 1) ? rsvp.totalAdults + ' adults' : rsvp.totalAdults + ' adult';

        // kids
        if (rsvp.totalChildren > 0) {
            result += (rsvp.totalInfants > 0) ? ', ' : ' and ';
            result += (rsvp.totalChildren > 1) ? rsvp.totalChildren + ' children' : rsvp.totalChildren + ' child'; 
        }

        // infants
        if (rsvp.totalInfants > 0) {
            result += (rsvp.totalChildren > 0) ? ', and ' : ' and ';
            result += (rsvp.totalInfants > 1) ? rsvp.totalInfants + ' infants' : rsvp.totalInfants + ' infant'; 
        }

        if (rsvp.cannotAttend) result = "no one";

        return result;
    }

    
};

