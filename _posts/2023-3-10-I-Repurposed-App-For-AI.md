---
layout: post
title: I Repurposed a JavaScript chat app as an AI bot
date: 2023-03-10 22:00:00 -0500
author: Eric Chrobak
---
<br>
Recently, I had the opportunity to share about programming at a local high school career fair. I thought of what I might showcase to the students and thought back to an app I built in a JavaScript class. It received some input and output reponses to the input. My thought was to repurpose the app to receive students reason to learn programming, what they hope to learn, and give some feedback.
<br><br>
The app itself was a simple front end application built with JavaScript and JQuery. My goal was to redevelop the app and then push it to my website. If you've read any of my previous posts then you know that my [website](https://www.ericchrobak.com) is built with Ruby, Jekyll, HMTL, CSS, and JavaScript. [Jekyll](https://jekyllrb.com) is a CMS built with Ruby. 
<br><br>

## **My website**
Here is a little more background about my website
- Ruby 3.1.2
- Is deployed when a push is made to the [Github repository](https://github.com/epunx2/ericchrobak.com)
- Runs on [Jekyll](https://jekyllrb.com)
<br><br>

## **The APP**
The JavaScript app is a very simple form with an input box, and then an un order list below with the line items being the comments or threads.
<br><br>
In the first iteration of the application there was only a few questions which had only a couple of response. Here the goal was going to be to give provide a few branches in discussion. 
<br><br>


**The Development**
<br>
This was accomlished with a series of case statements. The initial case statement keeps track of which question your on 1,2,3. Then it calls another function to parse the reponse to the question. 
Example:
```
case '1':
  post_bot_response(question_two(user_response));
  sleep(1500).then(() => {
    post_bot_response('What is your experience with programming?(Interested, Took a Class, Built some apps, Ready to work)');
  });
  question = "2";
  break;
```
<br>
Then the function for question 2 looked like:
```
var question_two = function(response) {
  switch (response.toLowerCase()) {
    case 'coding':
      bot_response = 'So you like to sit down and just hammer away at the keyboard until you pump out some cool new app that is going to change the world.';
      break;
  }
  return bot_response;
}
```
<br>
One of the issues that came up was the app was responding the instant the user responded and seemed unnatural. So, a sleep function was added to ensure the bot waited to respond a second after the user. Thus, the repsonses looked and felt natural.
<br><br>
As a little easter egg if they input my name the bot pretended to crash and say there is only one Eric. 
<br><br>

## **The Issue**
In order to make a change I have the repo cloned locally and launch a server in a terminal with:
```
jekyll serve
```
However, this requires Jekyll to be installed locally. It had been sometime since I had run the website locally. Since the last time I had run it locally, I've removed all versions of Ruby and rolled back to 2.7.2 for development I have to do for my company. 
<br><br>
This caused a dependency error when running ```bundle install```. It wouldn't install eventmachine. After countless searching on the internet, I tried to install a newer version of Ruby, then reinstalled my Gems, tried to change the Gems directory, etc. All to no avail. This put me in a bit of sweat because it was later in the evening and I need to get some sleep to be ready for the 8am career fair.
<br><br>

## **Resolution**
I decided to run the app locally. So I opened up the HTML file in my browser and it worked fine. My work was done!
<br>
As a side note later on I realized that had I set the local version of Ruby for the website to 3.1.2 ```jekyll serve``` would have worked fine. I would not have been able to push this post live without working that out.
<br><br>

## **What's Next**
- The vanilla Ruby application will receive a JSON package and iterate over it.
- Update on the Rails App - The goal was to add templates for the articles so that there is a header, hero image, and body text. Not sure if I'll get to that
<br><br>

## **Our next topic**
Hot to get into Software Engineering