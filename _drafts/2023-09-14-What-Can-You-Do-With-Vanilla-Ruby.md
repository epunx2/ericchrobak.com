---
layout: post
title: What Can You Do With Vanilla Ruby
date: 2023-09-14 00:00:00 -0500
author: Eric Chrobak
---
<br>
The next goal for the application will be to receive a JSON package and iterate over it.

We will go over use cases of what you can do with vanilla Ruby and give updates on the Vanilla Ruby app and Rails app.
<br><br>

# **What is Vanilla Ruby? It's not at the store...**
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