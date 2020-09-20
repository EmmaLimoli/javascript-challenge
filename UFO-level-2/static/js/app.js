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
tableData.forEach(function(alienSightings) {
    console.log(alienSightings);
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });  
});   

// create button to filter through dates
// create the select button and filter
// user filter button and d3
var button = d3.select("#filter-btn");
// use button on and create a function
button.on("click", function() {
    // call on the html to link to the data and print in the destination, wipe it clean
    tbody.html("");
    // create an element to stop the page from refreshing
    d3.event.preventDefault();
    // select the html element of the input id search-data, change input to make it all inclusive
    var inputElement = d3.select("#search-data");

    // use the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log inputValue and tableData to make sure it's working
    console.log(inputValue);
    console.log(tableData);

    // create filter with datetime equal to the inputValue
    // create city, state, country, shape, durationMinutes, comments filters use || as or instead of &&
    var filterDataDate = tableData.filter(ufo => ufo.datetime === inputValue ||
                                                 ufo.city === inputValue ||
                                                 ufo.state === inputValue ||
                                                 ufo.country === inputValue ||
                                                 ufo.shape === inputValue ||
                                                 ufo.durationMinutes === inputValue ||
                                                 ufo.comments === inputValue);
 

    // console log the filter data
    console.log(filterDataDate); 

    // use filterdata and create forEach like above to print out the filtered dates in the webpage
    filterDataDate.forEach(function(filterDate) {
        console.log(filterDate);
        var row = tbody.append("tr");
        Object.entries(filterDate).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
});




