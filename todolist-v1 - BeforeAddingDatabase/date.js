//jshint esversion:6


//can just use exports instead of module.exports
module.exports.getDate = function() {
    const today  = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    //console.log(today.toLocaleDateString("en-US"));      // 9/17/2019
    //console.log(today.toLocaleDateString("en-US", options));        // Saturday, September 17 2016 
    return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function() {
    const today  = new Date();

    const options = {
        weekday: "long"
    };
    //console.log(today.toLocaleDateString("en-US"));      // 9/17/2019
    //console.log(today.toLocaleDateString("en-US", options));        // Saturday, September 17 2016 
    return today.toLocaleDateString("en-US", options);
}

//console.log(module.exports);