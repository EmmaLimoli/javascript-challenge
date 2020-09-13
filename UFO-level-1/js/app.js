// from data.js
// this is the source
var tableData = data;
// create the destination
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// console.log data from data.js
// console.log(data);

// loop through data and console.log the array
// data.forEach(function(alienSightings) {
//     console.log(alienSightings);
// });

// start transfering the data, iterate through the source
// use d3 to push one table row to alienSightings object and object entries to see key and values
data.forEach(function(alienSightings) {
    console.log(alienSightings);
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });  
});   

// var btnRef = document.getElementById("filter-btn");
// btnRef.addEventListener("click", function(){
//     alert("Finally!!!")
// });
// console.log(btnRef);




var body = d3.select("body");
console.log(body)

