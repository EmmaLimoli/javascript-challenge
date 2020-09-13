// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log data from data.js
// console.log(data);

// loop through data and console.log the array
// data.forEach(function(alienSightings) {
//     console.log(alienSightings);
// });

// use d3 to push one table row to alienSightings object and object entries to see key and values
data.forEach(function(alienSightings) {
    console.log(alienSightings);
    var row = data.push("tr");
    Object.entries(alienSightings).forEach(function([key, value]) {
    console.log(key, value);
    // var cell = row.push("td");
    });  
});   




