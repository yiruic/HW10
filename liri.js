var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var action = process.argv[2];
var value = process.argv[3];


//Possible commands for this liri app
	switch(action) {
		case "my-tweets": 
			myTweets(); 
		break;
		case "spotify-this-song": 
			spotifyThisSong(); 
		break;
		case "movie-this": 
			movieThis(); 
		break;
		case "do-what-it-says": 
			doWhatItSays(); 
		break;
		default:
		    console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
		break;
		
		console.log("\r\n" +"Try typing one of the following commands after 'node liri.js' : " +"\r\n"+
			"1. my-tweets 'any twitter name' " +"\r\n"+
			"2. spotify-this-song 'any song name' "+"\r\n"+
			"3. movie-this 'any movie name' "+"\r\n"+
			"4. do-what-it-says."+"\r\n"+
			"Be sure to put the movie or song name in quotation marks if it's more than one word.");
		};



// Tweet function, uses the Twitter module to call the Twitter api
	function myTweets() {
		var Twitter = require('twitter');
			var client = new Twitter({
			  consumer_key: '',
			  consumer_secret: '',
			  access_token_key: '',
			  access_token_secret: ''
			});
		var params = {screen_name: 'aliascarrie', count: 10};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		  if (!error) {
		    console.log(tweets);
		  	}
			});

		var twitterUsername = process.argv[3];
		if(!twitterUsername){
			twitterUsername = "aliascarrie";
		}
		params = {screen_name: twitterUsername};
		client.get("statuses/user_timeline/", params, function(error, data, response){
			if (!error) {
				for(var i = 0; i < data.length; i++) {
					//console.log(response); // Show the full response in the terminal
					var twitterResults = 
					"@" + data[i].user.screen_name + ": " + 
					data[i].text + "\r\n" + 
					data[i].created_at + "\r\n" + 
					"------------------------------ " + i + " ------------------------------" + "\r\n";
					console.log(twitterResults);
					}
				}  else {
				console.log("Error :"+ error);
				return;
				}
			});

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


require("dotenv").config();
