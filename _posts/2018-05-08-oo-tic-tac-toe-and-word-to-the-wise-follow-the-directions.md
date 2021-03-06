---
layout: post
title: OO TIC TAC TOE and Word to the wise&#58 Follow the Directions!
date: 2018-05-08 18:55:19 -0400
author: Eric Chrobak
---

Solving problems with programming is an open ended adventure. There are multiple ways to solve a problem, present an idea, or make something. My most frustrating experience thus far in coding was a project I had for an online coding program I'm doing with Flatiron School. My goal was to build an Object Oriented TIC TAC TOE game in the command line. I had already built one but there was a difference in what they wanted me to do.

The first time I had to build one procedurally. When you code procedurally, your data and instructions are separate. When you write instructions, you have to "import" or pass your data into the method(where the instructions are located). You have to assign that data a variable in each method. For TIC TAC TOE you have an object for your board.  That data is passed into  every method. In each method when I make a call to the board for instance I have to assign a variable name to it. I had 13 methods which meant I had 13 variables in the program called board. It got confusing in my mind which board I was referring, what the status of the board was, and what the name of the board was if I didn't assign it the same variable name in each method.

By redesigning the application Object Oriented the one object of the board can be access from the methods and changed. Anytime I make a change to the board in a method I am referring to the same board object. A re occurring issue was I was not passing a variable into my methods and then assign them to a variable. This minimized the confusion I would have about what was the name of the variable and what was happening to it.

As far as the project itself, it was frustrating as my tests were often failing when everything seemed to be coded right. I attempted to come up with my own solutions to the requirements of the project. I followed the directions of the project loosely thinking I had everything under control. Sadly that's why my tests were failing... Tsk, Tsk. After many late nights trying to see where there were errors, long screen shares with tech coaches, and endless google searches I reread the directions to see if I was following the instructions to the "T". Guess what?!?! I realized that I wasn't. So, after some minor changes to my code, the heavens opened and my life became better. My tests all passed. I was jumping up and down, shouting, and generally excited. So a word to those who would be wise. Follow the instructions for your labs and projects.
