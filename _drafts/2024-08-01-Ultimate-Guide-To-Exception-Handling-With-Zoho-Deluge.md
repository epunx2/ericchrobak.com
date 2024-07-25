---
layout: post
title: Expert Guide To Zoho Deluge Exception Handling
date: 2024-08-01 08:00:00 -0500
author: Eric Chrobak
---
<br>
Error handling in Zoho Deluge -


I can’t tell you how many times I’ve had deluge functions fail and I was unable to source the reason why. If I go to look in the error log nothing shows up and I’m at a loss as to what went wrong. Ofte


The problem:
Need exception handling in Zoho.


Need to be notified when the exception happens.


If an invoke function or an api call don’t work then I don’t know.


Zoho deluge will let you know if there is a problem running the command. An example of that is when you have a call to retrieve something from a map or a list and there is nothing there or there is a null value. That will break the execution of the function and zoho will log that as an error.


When


Types of errors you run into while developing, executing, and maintaining functions.
Syntax and logic errors will be caught when you try to save the function. Ex.
new_map.toMap();


new_map.toMap();
