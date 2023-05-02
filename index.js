// Code your solution here
function findMatching(array, string){
    let filteredArr = array.filter((element) => element.toLowerCase() == string.toLowerCase())
    //console.log(filteredArr)
    return filteredArr
}

function fuzzyMatch(array, string){
    let fuzzyArr = array.filter((element) => element.toLowerCase().slice(0, string.length) === string.toLowerCase())
    return fuzzyArr
}

function matchName(array, string){
    let matchedArr = array.filter((element) => element['name'] === string)
    console.log(matchedArr)
    return matchedArr
}