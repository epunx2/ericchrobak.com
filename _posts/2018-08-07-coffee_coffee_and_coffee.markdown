---
layout: post
title:      "COFFEE, Coffee, and coffee..."
date:       2018-08-07 05:57:26 +0000
permalink:  coffee_coffee_and_coffee
---


Coffe and coding seem to go together like peanut butter and jelly. When I hunker down to work on a project there is nothing like a nice cup of java to get me going! 

For the course work at Flatiron a recent project required me to pull data from websites through a method called scraping. It works just like it sounds, you are literally scraping data off of a website. Similar to scraping snow off of the car  you move the snow elsewhere. The difference with programming is the data stays on the website. But you do get the data to manipulate or use as you see fit. 

Then I was to provide an interface for the user via the command line requesting input. They would interact with the data. Classes would be created and instances of those classes based on the data that I scraped. 

My first attempt was to scrape from Yelp's website and find local coffee shops. The first step was to create my command line interface(CLI). This would be what the user would interact with. There would be some text output in the terminal/bash/console/etc that would request input from the user, then based on that input the CLI would respond back with data or exit the program. 

The CLI was a ruby class that I created with methods to display a welcome, menu, and goodbye message. Inside of my menu I called another class that scraped the Yelp page. Then my scraper class parsed the data scraped and created instance of coffee shop classes based on the elements containing data returned by the scraper. Everything worked well except for the most important part: Yelp wouldn't let me scrape their website. 

**Major lesson learned:**
Be sure to test along the way the parts you are adding are working. I built my scraper class and coffee shop class without testing if yelp would allow me to scrape their website. So, I had to undo everything and start from scratch.

Then I tried another website with details on coffee. Their website was difficult to scrape and create new instances of the coffee class. So, I had to settle on Wikipedia's page on coffee. From their I decided to scrape from some tables that had info on coffee roasts. 

I created coffee roasts classes based on the info provided including common names, temperature roasted, and other details about light, medium, and dark coffee roasts. After running some tests things looked to be working smoothly. The interface responded to the user's input. From there I rearranged the interface text output and order somewhat to make it more visually appealling and make a simpler experience for the user.

At this point the app scrapes the page well, creates the coffee roasts classes, responds to the user well, and meets the criteria for the project.

**Features of the app:**

1. CLI class
  - Outputs welcome to user.
  - Receives input.
  - Calls Scraper class
  - Retrives Coffee Roast instances from Coffee Roast class
  - Accesses the input with a case statement, responds based on input with data, a list of options, or says good bye and closes.

2. Scraper Class
  - Scrapes the wikipedia page
  - Parses the elements returned to retrieve data
  - Creates Coffee roast instances with the retrieved data

3. Coffee Roast Class
  - Sets attr assesor for the key:values for the Roasts
  - Adds the instances to a class variable
  - Provides a method to return all instances of class

The project seemed like climbing a mountain at first but, after breaking it down to parts it didn't end up being as difficult as it originally seemed. It was much easier than I thought and I feel much more confident in programming abilities and Ruby in general after this.
