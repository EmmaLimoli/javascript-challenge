// from data.js
// this is the source
var tableData = data;
// create the destination (this is the html)
var tbody = d3.select("tbody");

// console.log tableData from data.js
console.log(tableData);

// loop through data and console.log the array
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

// create button to filter through dates
// var btnRef = document.getElementById("filter-btn");
// btnRef.addEventListener("click", function(){
//     alert("Finally!!!")
// });
// console.log(btnRef);


