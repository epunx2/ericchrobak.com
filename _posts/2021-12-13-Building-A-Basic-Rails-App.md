---
layout: post
title: I Built A Basic Rails App
date: 2021-12-16 22:20:00 -0500
author: Eric Chrobak
---

<br>

I've been developing for quite some time and had put my Ruby learning to the side but, it felt like to due time to get back in the saddle. So I started with the official [Ruby on Rails getting started with Rails Guide](https://guides.rubyonrails.org/getting_started.html). I am going to talk about the steps necessary to build that first app, the structure of a Rails app, what the MVC architecting pattern is, and what I plan to do next with the app.
<br>

If your new to programming in Ruby you will need to get a few things setup on your local machine:
<br>

1. Install a package manager - If your on Mac use [Homebrew](https://brew.sh/).
2. Install the necessary pre-reqs - Ruby, SQLite3, Node.js, Yarn
3. You can check if you have Ruby by typing Ruby --version in your command line
4. You can do the same with the rest. If you don't find these on your machine you can reference the Ruby on Rails guide for instructions on installing these
<br><br>

Once I had those installed it was super simple to get a Rails app built as it comes with generators. I found the folder I wanted to install the app in and typed:
```
rails First-Rails-Blog
```
<br>

That gave me a folder structure with all the required files and folders to start working. 
<br>

Okay we are all set there so let's talk about what a Rails app is. Rails is a framework for Ruby.  Rails is built using Rack which provides a way to wrap HTTP requests and responses. This provides simplified routes. It has an MVC architecture which is short for Model, View, and Controller.
<br>

When a url is entered into the browser, a link is clicked, or a button pressed then Rails will take that URL to determine what should happen next:
<br>

1. The Routes file in the Rails app will parse the url and go to the Controller
2. The controller will determine which view should be show
3. The view specifies what should be shown on the screen
4. If the view is an edit or create page then when the user submits the information it passes to the controller and then the model to determine how to 
<br>

You fill find numerous folders in your Rails app and many of those folders are outside the scope of this article but, let's focus on the relevant ones for launching your first app:
<br>

**APP**: This is where you will find many the files relevent to your application. 

1. Images, css, etc
2. Controllers - these are what control what happens when you hit a url
3. Javascript
4. Models - these are like the template for your data tables. That's why they are called models. They are the model for your data
5. Views - this is what your Controllers load up. The app web pages or templates for web pages
<br>

**bin** - Rails commands are located here such as Rails server
config - Configuration files are here along with different environments

1. The main one to concern yourself with when first launching Rails apps is the Route file. 

**db** - where your database Schema files and migrations are located

1. Schema is the details of your database structure such as tables, fields, and relationships
2. Migrations are each change made to the database

**Main folder** - has different files

1. Gemfile where you specify all of your required Ruby Gems to install
2. Rakefile - set tasks that can be run from the command line
3. README - instructions to launch your application
<br>

That gives you a general breakdown of the files you will interact with in your first couple of Rails Apps.
<br><br>

With this Rails Blog application the goal was to have blog articles and comments. The comments are made to the articles and they have author and email. The application allows you to create, view, and edit articles and the same with comments on those articles. [Check it out](https://github.com/epunx2/first-rails-blog)
<br>

## What's Next for the App

The next goal for the application will be to add templates for the articles so that there is a header, hero image, and body text.
<br>

## Our next topic: 
We will be going over some basic functionality that you can accomplish with vanilla Ruby.