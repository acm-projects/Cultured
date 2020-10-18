// History track function
// Used node-browser-history

const BrowserHistory = require('node-browser-history');

// array to hold rounting number
let tempCountries = ["America", "Canada", "Japan", "Korea", "France", "Italy"];

// array to hold the countries that user visited
var found = new Array();


BrowserHistory.getAllHistory().then(function (history) {

    // To get the url
    for (var i = 0; i < history[1].length; i++) {

        for (var j = 0; j < tempCountries.length; j++) {

            // Check whether the user has visited the country
            if (history[1][i]["url"].includes(tempCountries[j])) {
                
                found[j] = history[1][i]["url"];
            }
        }

    }
    
});