---
layout: post
title: Moving From Ruby To PHP
date: 2023-08-23 00:00:00 -0500
author: Eric Chrobak
---
<br>
At my [9-5](https://www.vaspian.com) we provide a variety of telecom services to our clients and use [Zoho One](https://www.zoho.com/one/) as our ERP. We have a texting platform that sends out mass text messages on behalf of our clients. However, they need the phone numbers verified before sending the sms blast out. We provide a service that scrubs the list of invalid phone numbers. When that is completed it sends an email to our [CRM](https://www.zoho.com/crm/) to generate an invoice. The crm parses the email to generate the invoice. We needed to move away from the email parser due to it's instability.<br><br>

## **It's 2023! Why in the world am I programming in PHP?**
<br>
It turns out a lot of companies have applications besides their WordPress website built with [PHP](https://www.php.net/). The application in questions is a PHP application. We decided to add a class to the existing PHP scrubbing application. This would authenticate with Zoho CRM and send the scrubbing data over via a POST request. I previously developed a Ruby application on AWS Lambda for a different use case. This Ruby application authenticated with Zoho CRM and made a POST request. We decided to change the syntax of the code to work in PHP. <br><br>

## **How I built it in PHP**
<br>
I wasn't as familiar with OOP in PHP so I spent some time learning on [PHP-Manual](https://www.php.net/manual/en/index.php). The main differences were syntax and the necessary libraries. In the Ruby application I had [Ruby gems](https://rubygems.org/) for the following functionality:
- HTTP requests - [Faraday](https://lostisland.github.io/faraday/#/)
- Logging - [Logger](https://ruby-doc.org/stdlib-2.4.0/libdoc/logger/rdoc/Logger.html)
<br><br>

The PHP standard for HTTP request is [cUrl](https://www.php.net/manual/en/book.curl.php), which is what I am using. I created a function just for the cUrl call which would be used for authentication and the POST.
<br><br>
I also adjusted the syntax and variable declarations to ensure the code worked. After adding test data, the application authenticated and made a succesful POST call to Zoho CRM. I removed the class features to have the code be part of a copy and paste into the application. 
<br><br>

## **What's Next**
<br>
I realized after removing the class functionality that the code is no longer modular or extensible to the existing application. So I will need to adjust the code to be a class once again. Then I will instantiate the class in the existing application. When the class is instantiated it will authenticate with Zoho. Then we can make a call.

Example code:
```php
// Main application
$crm_payload = [
    "key1"=>"value1",
    "key2"=>"value2"
];
$zoho_api = new zohoCRM()
$zoho_api->crm_post("module_name","Upsert",$crm_payload)
class ZohoCRM
{
    var $headers;
    var $crm_base_api_url = "https://www.zohoapis.com/crm/v3/";

    function initialize()
    {
        $this=>authenticate()
    }

    function authenticate()
    {
        $headers["client_secret"] = "client_secret";
        $auth_url = "somezoho url";
        $response = $this=>crm_post($auth_url);
        $headers["Authorization"] = "Oauth " . $response["token"];
    }

    function crm_post($url, $post_type, $payload = null)
    {
        // crm post code here
        $curl_url = "";
        $this=>curl($curl_url);
    }

    function curl($url)
    {
        // curl code here
    }
}
```
<br>

## **Our Next Topic**
<br>
After I finish adding the class to the PHP code, I will add logging and any necessary try/catch for error handling and debugging. Then we will review the finalized PHP Class.