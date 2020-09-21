# javascript-challenge
<h1>Creating A Filter For Search On A Webpage</h1>

<strong>The Goal:</strong> 
In this project, the goal is to create a webpage that has HTML, CSS, and JavaScript. The webpage is to have search and filter capabilities. A user can filter through a table of data based on the date or other requirements such as country or state.

![HTML/CSS design](https://github.com/EmmaLimoli/javascript-challenge/blob/master/UFO-level-1/images/Screen%20Shot%202020-09-16%20at%202.43.49%20PM.png)

I used JavaScript to make the filter search interactive. The HTML created the content for the page and CSS was used to design it. 

<strong>How This Was Achieved:</strong>
I decided to use two images from NASA to make the page look more inviting. The NASA pictures can be found in Images. I also changed the background color to black to make it more space-focused. The text is white to make it easier to read. I used the "Truth is out there" to entice readers and wrote a sentence about how the government has known about aliens all along to make it eerie.

![filter search](https://github.com/EmmaLimoli/javascript-challenge/blob/master/UFO-level-1/images/Screen%20Shot%202020-09-16%20at%202.44.12%20PM.png)

<strong>The Coding:</strong>
As for the coding aspect of the project, I mostly focused on getting the table to be interactive with the search filter bar. I took out some of the HTML and the CSS that I didn't need, but kept most of it based on how I wanted to create my page. As for the JavaScript, I made sure that app and data were linked to the HTML doc. I noticed that while in static, the docs weren't working, so I took that out in UFO-level-1, but it worked in level-2, so you'll notice the discrepency.

Using JavaScript for level-1, I broke the project down into three parts. The first part was to print the data in the HTML doc, the second was to get the button working, and the third was to filter the data. 

In level-2, I changed the button to be more inclusive and added the filters that I wanted to filter through. I also changed the input so it wasn't just datetime and could filter through more data.

![filter through dates](https://github.com/EmmaLimoli/javascript-challenge/blob/master/UFO-level-1/images/Screen%20Shot%202020-09-16%20at%202.44.32%20PM.png)

First, I needed to call on the data and then I needed to link to the destination of where it was going. I printed out the tableData in console.log to make sure I was pulling it in correctly.

Then I created a forEach loop to iterate through the tableData. I created a function called alienSightings to push the tableData from the data JavaScript file into the HTML file. I used Object.entries in the forEach to print out the keys and values. I also used tbody.append to fill in the table and the cells and rows in HTML.

For the second part, I created a button to filter through the dates. I did this by using d3. I created a function and used button.on and 'click' to begin to create an event for the button. I selected datetime for the inputElement since that's what I wanted to focus on filtering through in level-1. In level-2, I changed the input to search-data to include the additional data I wanted to filter through. I used value as the inputValue and then I printed those two out in console.log. I created a filter variable called filterData to sift through the datetime.  I used an arrow function to make it a little cleaner. In level-2, I added on to the filter and used the arrow function to build out the search requirements and set it all to inputValue, which used d3, search-data, property, and value.

Lastly, I called on filterData again to create a forEach loop function and repeated the process of printing out the filtered data in the HTML file. I followed the same code as I had done earlier when I had all of the data to make sure it was showing up on the webpage rather than the console. 

![filter through everything](https://github.com/EmmaLimoli/javascript-challenge/blob/master/UFO-level-2/images/Screen%20Shot%202020-09-18%20at%209.47.26%20AM.png)

<strong>What Was Difficult:</strong>
What I found difficult about this assignment was understanding how the data was being linked to the the HTML doc. The real key to the code was using tbody.html("") because that's what made the filtered data print out not in the console log, but the HTML doc and resets it. I also had difficulties with the filtering and the folder finding. For whatever reason, initially my docs weren't found in static in the first part, so I got rid of it and it worked fine. Then in the second part, finding the image didn't work, so I changed it up a bit to get it to cooperate. As for the filtering, it was easier to use the classwork, but it did take me awhile to get everything little thing working. 

