---
layout: post
title: What Can You Do With Ruby?
date: 2022-01-31 22:00:00 -0500
author: Eric Chrobak
---

<br>

Have you ever asked yourself questions like:
<br>

- *What can I do with a programming language?*
- *What can I do with plain/vanilla Ruby?*
- *Can I build an application without Rails?*
- *Do I need a framework to develop Ruby applications?*
<br><br>

First off let's discuss why these questions are relevant. The majority of Ruby programming is done using a framework and that framework is probably [Ruby on Rails](https://rubyonrails.org/). If you are not using Rails then you are probably using [Sinatra](http://sinatrarb.com/)(DSL) or Jekyll(CMS). A framework provides you with the pre-build methods and structure to develop applications quickly. Some has already built it or come up with a solution. Rather than reinvent the wheel use their solution. That's where a framework comes into play. I mentioned in my previous blog post that you can [essentially type 2 commands]({% post_url 2021-12-13-Building-A-Basic-Rails-App %}) into your terminal and an Rails app is created. That's the power of a framework. 
<br><br>

# **Then why would you build your application without a framework?** 
<br>

**Learn more about the language**
<br>
For instance if you need to process some data and return it then you can learn how to use Ruby to do that in one file and even one method.
1. You set up a Ruby file on a server. 
2. Add parameters to receive data as a hash or an array from an api or webhook call to it. 
3. Here you have to make an architectural decision. If you are expecting to process over large datasets then you have to determine what will be the quickest way to access the data you need. 
<br>

*You could:*
- Add a loop to iterate over the array
- Create a Set
- Try a Ruby gem like Daru to create a Dataframe
- Otherwise you add the logic to process the data and return it
<br><br>

**You don't need to learn Rails or Sinatra** 
<br>

Both Frameworks take months to learn and longer to master


**You don't have to deal with any overhead from the framework.** 
<br>

Here's what overhead can look like
- Unnecessary files in our application
- The application using unnecessary computing resources to run when not in use
- The maintenance of the application will increase and get complicated. The Rails or Sinatra application will require it's own updates to stay in use. 

**Quicker time to launch and push new features**
<br>

Less files and lower complexity will increase speed to launch
<br>

These cover some of the main reasons why you might not want to use a framework for your application.
<br><br>

# **Let's answer 'What Can You Do with Ruby?'**

We talked about why you might not want to use a framework to build your application. However, you can still use a lot of the underlying technology or libraries that Rails and Sinatra are built on. These come in the form of [RubyGems](https://rubygems.org/) which are very similar to packages in JavaScript. 
<br><br>

With these gems you can call methods that accomplish a wide variety of tasks like:
- Application Routing
- Handle HTTP requests
- Debugging
- Authentication
- Forms
- Search
- Testing
- Database Relationship Mapping
- Task Management
- File generation
- Scheduled Jobs
- Develop APIs
- Build API integrations between multiple applications
<br>

That's the tip of the iceberg of what RubyGems can do. This gives us a lot of flexibility and options to solve the problems coming our way. Let's discuss the use case of generating a file. 
<br><br>

**File Generation**
<br>

Many companies need to get data in the form of a .csv or a .pdf. That's where the example above would come into play. If you need to process the data then your file may look like this:
<br>

```ruby
class Filechange
    attr_accessor :first_name, :last_name, :age

    def initialize(params = {})
        @first_name = params.fetch(:first_name)
        @last_name = params.fetch(:last_name)
        @age = params.fetch(:age)
    end

    def process()
        "#{first_name} | #{last_name} | #{age} \r"
    end

    def write(content)
        File.write("content.txt", content, mode: "a")
    end
end

def add_to_file(file_content)
    file_name = Filechange.new(file_content)
    new_content = file_name.process()
    file_name.write(new_content)
end

file_content = {:first_name => 'John', :last_name => 'Adams', :age => 85}
add_to_file(file_content)
```

I'll walk you through what is going on here:
1. I created the 'Filechange' class for the file change
2. I created the add_to_file method to run the program and create an instance of the object
3. In the class there are is a method process the information and one to write the information
4. The method to process the information isn't doing anything other than apply it to a string in a pipe delimited format.

If you had multiple rows of data you could create a loop to run the process method and write method for each row.

Here's what it looks like:
<br><br>
<img src="/jpg/file-generator.png" style="width: 100%;" alt="File Generation Code">
<br><br>

## **What's Next for this Vanilla Ruby App**
The next goal for the application will be to receive a JSON package and iterate over it.
<br><br>

## **Update on the Rails App**
The goal was to add templates for the articles so that there is a header, hero image, and body text. There will be an update on that in the next post.
<br><br>

## **Our next topic**
We will go over use cases of what you can do with vanilla Ruby and give updates on the Vanilla Ruby app and Rails app.