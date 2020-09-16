# javascript-challenge
basic javascript project

The Goal: 
In this project, the goal is to create a webpage that has HTML, CSS, and JavaScript. I used JavaScript to make the filter search interactive. The HTML was used to create content for the page and CSS was used to design it. The goal was to be able to search and filter through a table of data based on the date.

How This Was Achieved:
I decided to use an image from NASA to make the page prettier. The NASA picture can be found in Images. I also changed the  background color to black to make it more space-focused. The text is white to make it easier to read. I used the "Truth is out there" to entice readers and write a sentence about how the government has known about aliens all along.

The Coding:
As for the coding aspect of the project, I mostly focused on getting the table to be interactive with the search filter bar. I took out some of the HTML and the CSS that I didn't need, but kept most of it in based on how I wanted to create my page. As for the JavaScript, I made sure that app and data were linked to the HTML doc. I noticed that while in static, the docs weren't working, so I took that out.

In JavaScript, I broke the project down into three parts. The first part was to print the data in the HTML doc, the second was to get the button working, and the third was to filter the data. 

First, I needed to call on the data and then I needed to link to the destination of where it was going. I printed out the tableData in console.log to make sure I was pulling it in  correctly.

Then I created a forEach loop to iterate through the tableData. I created a function called alienSightings to push the tableData from the data JavaScript file into the HTML file. I used Object.entries in the forEach to pick out the keys and values. I also used tbody.append to fill in the table and the cells and rows. 

For the second part, I created a button to filter through the dates. I did this by using d3. I created a function and used button.on and click to begin to create an event for the button. I selected datetime for the inputElement since that's what I wanted to focus on filtering through. I used value as the inputValue and then I printed those two out in console.log. I created a filter called filterData to sift through the datetime.  I used an arrow function to make it a little cleaner. 

Lastly, I called on filterData again to create a forEach loop function and repeated the process of printing out the filtered data in the HTML file. I followed the same code as I had done earlier when I had all of the data to make sure the data was showing up on the webpage rather than the console. 

What Was Difficult:
What I found difficult about this assignment was understanding how the data was being linked the the HTML doc. The real key to the code was using tbody.html("") because that's what made the filtered data print out not in the console log, but the HTML doc. I also had difficulties with the filtering. 

