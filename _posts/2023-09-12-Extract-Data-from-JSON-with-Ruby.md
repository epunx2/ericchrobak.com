---
layout: post
title: Extracting Data from JSON with Ruby
date: 2023-09-13 23:00:00 -0500
author: Eric Chrobak
---
<br>
I have a simple app I built to receive a string and pass that string to a .txt file. The next goal of the application was to receive data from a .json file. The main hurdles that I had to face were setting headers and formatting the data to output to a file. That required a complete overhaul of the app. The initial application was a class with an initialize function, set headers, set content, create file, and write to file function.
<br>

## **Changing the Initialization function**
The first version of the initialization took the file input and set it to a attr_accessor variable and set the output as a string. 
<br>
```ruby
def initialize(file_input)
  self.file_input = file_input
  self.file_output = ""
end
```
<br>
The initial code to run the class passed the file name and content via a different method. 
<br>
```ruby
file_obj = CreateUpdateFile.new()
file_obj.create_file("content.txt",headers,content)
```
<br>
It was redunant to instantiate the object and then call another function to pass the content and file name. 
<br>
```ruby
def initialize(name,input)
  self.input(input) 
  self.output = @headers + "\n" + @content
  self.write_to_file(name)
end
```

# **Setting the Headers**
In the previous version of the application I was receiving the headers as an array. This would happen when invoking the create file function. The headers were passed as an argument to the function. Then another function was called to set the headers. This was setting the array indexes as a pipe delimited string.
<br>

```ruby
def set_headers(headers)
  header_length = headers.length
  iteration = 0
  headers.each do |i|
    iteration += 1
    if header_length != iteration
      @file_output << "#{i} | "
    else
      @file_output << "#{i}"
    end
  end
end
```
<br>
In the new initialize method another class method is called to set the content and headers. The content and headers are passed in as an array of hashes. The key is the header and the value is the content for the file output.
<br>

```ruby
def initialize(name,input)
  self.input(input) 
  self.output = @headers + "\n" + @content
  self.write_to_file(name)
end

def input(input)
  content = JSON.parse(input)
  @content = self.format(content.values)
  @headers = self.format(content.keys)
end
```
<br>
The new() method calls the input method. The input method receives the input and then extracts the keys and values of the hash. An internal class method is called to format the data in each. It sets them into an array.
<br><br>

## **Writing to the File**
Initially there was a method called update file. However, each method had File.Write. It made more sense to make that line into it's own method. It served one purpose very well. 
<br>

```ruby
def write_to_file(name)
  File.write(name, @output, mode: "a")
end
```
<br>

Then remaining piece was updating an existing file. Here the input was received, written to an array, and the array pushed to the file.
<br>

# **Final Thoughts**
Before this work was done the app was not replicable. The code base only supported major changes to the code to work in different use cases. Now the application is more durable, flexible, etc
<br><br>

# **What's Next**
This app needs to be able to receive different file or formats for import. The common ones would be .csv, .xlsx, or a JSON that is less formatted.
<br><br>

# **Our Next Topic**
Adding error handling to the PHP application and launching the application.