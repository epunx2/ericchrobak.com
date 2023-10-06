---
layout: post
title: How To Launch A Simple Ruby Web App
date: 2023-09-22 00:00:00 -0500
author: Eric Chrobak
---
<br>
Today's planned post was about adding error handling to a PHP application but, it will be postponed. Instead, we'll focus on the previous app that created a file from a JSON file. We will need to add a user interface to allow users to upload their data and provide it back to them. So, we'll look at how to launch a simple web app using a Ruby DSL called Sinatra. One of my go-to tools for basic web apps is [Sinatra](https://sinatrarb.com/). If you've been around programming you've probably heard of a similar [Python](https://www.python.org) tool called [Flask](https://flask.palletsprojects.com/en/2.3.x/). Sinatra is very similar. It's what's called a DSL or Domain Specific Language. 
<br><br>

Sinatra allows you to launch a web app with just 4 lines of code([Taken directly from their website.](https://sinatrarb.com/intro.html) I'm not advocating smoking):
<br>
```ruby
require 'sinatra'
get '/frank-says' do
    'Put this in your pipe & smoke it!'
end
```
<br>

It assumes you've installed the Sinatra gem. Install the Sinatra gem before you run this script. Once it's installed you can ```ruby filename.rb``` in your terminal, command prompt, or bash from the directory of the ruby file. 
<br><br>

With Sinatra you can create routes, Views/Templates, sessions, logging, and many other features you would find in a basic web app. I've not used it for Database work in years but, it is possible to build an MVC app with Sinatra.