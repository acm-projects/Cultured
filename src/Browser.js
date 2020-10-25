// import { createBrowserHistory } from 'history'

// export default createBrowserHistory({

// })
// import axios from "axios"

// var visited = [];

// import setVisited = (country) => {
//     visited.push(country);
// }
// var visited = ["Korea"];

// Global array list
global.visited = ["South Korea"];
// exports.visited = visited;

// Function to push the country route
function pushFunc(param) {

    global.visited.push(param);
}

// DOESN'T WORK
// Tried to get the global variable but not working
// Returns an empty arraylist
function getVisited() {

    // var returnState = "Claire";

    // for (var i = 0; i < global.visited.length; i++) {

    //     returnState += global.visited + " ";
    // }

    // return returnState;

    alert(global.visited);
    return global.visited;
}

export {
    pushFunc,
    getVisited
}
// export { visited };
// export default visited

// export const getVisited = (country) => {
    
//     ret
// }