import constants from "../components/map/map-constants";

function Next() {

    //var countries2 = [];
    let countries = ["/United-States-of-America", 
                    "/Canada", 
                    "/Mexico", 
                    "/Nigeria", 
                    "/Uganda", 
                    "/Brazil", 
                    "/Romania", 
                    "/Japan", 
                    "/South-Korea",
                    "/China",
                    "/Vietnam",
                    "/Philippines",
                    "/India",
                    "/Indonesia",
                    "/Thailand",
                    "/Malaysia",
                    "/Chile",
                    "/Egypt",
                    "/Czech-Republic",
                    "/Finland",
                    "/Kenya",
                    "/New-Zealand",
                    "/United-Kingdom",
                    "/Italy",
                     "/Greece",
                     "/Spain",
                     "/Russia",
                     "/Argentina",
                     "/Kazakhstan",
                     "/Algeria",
                     "/Greenland",
                     "/Saudi-Arabia",
                     "/Sudan",
                     "/Libya",
                     "/Iran",
                     "/Mongolia",
                     "/Peru",
                     "/Chad"
                    //"/Belize"
                    ];

    // Get the current pathname
    let currentPath = window.location.pathname;
        

    // Remove the current pathname from the list
    Array.prototype.remove = function (x) {
        return this.filter(function (v) {

            return v !== x;
        })
    }

    
    // Remove the current path
    const newArray = countries.remove(currentPath);

    // Get random index
    var index = Math.floor(Math.random() * (newArray.length - 1));

    // Go to random country
    return window.location.href = newArray[index];
}

export default Next;