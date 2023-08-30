---
layout: post
title: How to Extend Your App
date: 2023-08-29 00:00:00 -0500
author: Eric Chrobak
---
<br>

# **How do you extend your App? With Classes**

I worked in construction previously and we built several home additions. These additions had to integrate with the existing systems of the home like the HVAC, plumbing, and electricity. If you are building up on the house then you have to consider load bearing walls, ventilation, roofing, adding staircases, etc. People are aware of this and don't just start tearing off the side of their house. They find a contractor, get blueprints, get permits, order material, and then the work starts. From there they dig the hole, pour the foundation, let it sit, frame the walls, put the roof rafters on, add plywood to the wall and roof, etc. Eventually, you put wiring in the walls, plumbing, close up the walls, add lighting, paint, add flooring, do the finishing touches and the work is complete.
<br><br>
Just like there are various things that you need to consider when you do an addition on a house, you have to do the same when you extend the functionality of an existing application. For instance if your app is a single file with several hundred plus lines of code, you don't want to add another 100 lines of code to extend the application. It becomes unwieldy the larger the file is. The  same applies if you have an MVC application. A great way to extend your application is to create and/or add a library to the application. 
<br><br>

# **Extending the PHP Application**
In the previous blog post we talked about a use case where a Ruby application needed to be ported to PHP. The biggest issue with the initial port was, it did not allow you to easily extend the functionality of the PHP app. The new script worked as expected but,it would have had to be copied and pasted into the main run file. The way the new script was written would have required significant changes to the existing PHP app. The new app was left at a point where it was prototyped out and working. 

It needed to be made into a class which could be called in the existing PHP app. For this library it only needed a class with 3 functions. 
<br><br>

# **The Constructor Function** 
```php
private $curl, $header, $token_url
public function __construct(){
  $this->curl = curl_init();
  $token_url = "zohoapiurl";
  $token_response = $this->post_call($token_url);
  // Add the token to the header
}
```
1. In the initialization initiate the curl instance. 
2. Make a POST to authenticate with Zoho using OAuth2. 
3. Save the access token to an instance variable that is used for each call to Zoho.
<br><br>

# **Upsert to Zoho** 
```php
public function upsert($payload){
  $upsert_object - array("data" => ["payload"]);
  $upsert_url = "zohobaseurl/upsert";
  $upsert_response = $this->post_call($token_url,$this->headers,json_encode($upsert_object));
}
```
1. Receive the parameters 
2. Add them to an array
3. Add the array to a key-value called 'data' that Zoho requires for an upsert
4. Add that key-value to another array.
5. Make a POST call to Zoho to upsert the record.
<br><br>

# **Function to make POST calls with curl**
This is used to make all POST calls using the curl instance initialized in the construct method.
```php

public function post_call($url, $header = array(), $post_fields = array()) {
    // code for curl
}
```
<br>

# **Final Thoughts**
I decided to move the authentication into the initialization/construct function as it made more sense as the authentication is the first thing needing to be done before communcating with the API.
This is a large improvement upon the previous script as you only need to require the library, initialize an instance of the class, then pass that payload. Building the class is much more plug and play for the developer managing the PHP application. 
<br><br>

# **What's Next**
Add error handling and debugging.
<br><br>

# **Our Next Topic**
I took an extended break from blogging after my wife and I had a child after the New Year. So, there are some unfinished projects we will return too:
- The vanilla Ruby application will receive a JSON package and iterate over it.