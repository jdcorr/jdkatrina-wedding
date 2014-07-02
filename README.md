jdkatrina-wedding
=================

##Katrina and JD's Wedding Site

Site uses Angular-fullstack generator for Yeoman. 

Additional dependencies:
MongoDB & MongoHQ
PayPal API
Google Maps Angular

Build Locally:
 grunt serve

Build and Deploy (to Heroku):
To deploy a new build
	grunt build
Then enter the dist folder to commit these updates:
	cd dist && git commit -am "describe your changes here"
Finally, deploy your updated build to Heroku with
	git push heroku master
