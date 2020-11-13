import constants from "../components/map/map-constants";

function random() {

    let countries = ["/UnitedStates", "/Canada", "/Mexico", "/Nigeria", "/Uganda", "/Brazil", "/Romania", "/Japan"];

    // Call random function to get index
    var index = Math.floor(Math.random() * (constants.length - 1));

    // var index = Math.floor(Math.random() * (countries.length - 1));

    // return window.location.href = countries[index];
    return window.location.href = "/" + constants[index].countryName;
}

export default random;