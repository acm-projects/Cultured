import constants from "../components/map/map-constants";

function Next() {

    //var countries2 = [];
    let countries = ["/UnitedStates", "/Canada", "/Mexico", "/Nigeria", "/Uganda", "/Brazil", "/Romania", "/Japan"];

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