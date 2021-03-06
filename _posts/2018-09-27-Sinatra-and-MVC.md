---
layout: post
title: Sinatra and MVC
date: 2018-09-27 17:54:10 +0000
author: Eric Chrobak
---

Developing an app involves a level of complexity that would make using a single file for all the code completely useless. This is due the difficulty of debugging a large file and make changes when necessary. In addition such a file would be difficult to read.

This is were frameworks come in such as Sinatra. They allow for code that readable, easy to debug, and is separated by function.

Sinatra is a Ruby gem used to build lightweight web applications using Ruby and Rack.

MVC
A Sinatra app can be built using the Methods-Views-Controllers method. This method has a separation of concern for each function of the application. The files are sectioned off according to purpose and function.

Models
Models are what is used in the back ground. The logic or brains of the application. This is where the classes are created and the objects. This is also where data may be persisted or saved.

Views
The views are what is seen by the user. The HTML, CSS, and JavaScript viewed on the webpage.

Controllers
The controller is what controls the whole application. It talks to the model and then tells the view what to show. It then will receive input from the view and relay that to the model.

It does this by using routes. The route is the http request or address input into the address bar.

The Flatiron School uses a restaurant as an metaphor to illustrate how an MVC works. Cooks are the Models - they receive input from the waiter and output food. Plates are the view - the food is presented on the plate Waiters are Controllers - they receive input from the user(customer), give that to the cook, and bring food to the customer

Folder Structure
Code in a MVC Sinatra application is organized by a concept call separate of concerns and single responsibility. This means that each folder and file will have a specific responsibility and be separated by responsibility.

Flatiron School provides an in-depth description of the structure here.

A brief summary of that layout and structure: Gemfile - Where your gems are held. These will be installed by bundler as well as look for dependencies. app.rb or app Directory - this folder holds mvc files Models Directory - This is where the logic files will be. The files may represent single functions or larger group of similar functions. Inside of each file you will often find individual classes. Controller Directory - This is where the application configuration, routes, and controller actions will be located. These files controller the communication between the Models and views. Views Directory - This is where the files will be for the views. What is displayed to the user is in this directory. config.ru - This file is necessary for building Rack applications and using Rackup/Shotgun to start a server. This file will also load our environment, libraries and application. Config Directory - This is where our environment file will be located. The environment file connects the application files to the proper Ruby gems and to each other. Public Directory - Where the front files will be located. Files such images, videos, CSS, etc. Spec Directory - This is where the test files will be located.

Initially Sinatra seemed foreign but reading the file structure, mvc mater, and putting together some simple apps it was less intimidating. I hope this article provides the resources to make a little less intimidating for you as well!
