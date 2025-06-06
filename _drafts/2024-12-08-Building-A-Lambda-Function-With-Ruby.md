---
layout: post
title: Using Ruby With AWS Lambda Functions
date: 2024-12-10 08:00:00 -0500
author: Eric Chrobak
---
<br>
Much of my day-to-day work involves automating common business processes such as creation of data, billing, and reporting. There are a lot tools out there that could handle these processes such as a low or no code tool. I have found these to be lacking in customization, control, and cost. The upfront costs are minimal but, you get locked into recurring fees that add up over time. Of course the same could be said if you develop custom solutions on platforms such as Google Cloud, AWS, Azure, Digital Ocean, etc. The difference here is the cost of execution is very minimal even as you initially scale up.

For the low cost of compute time running serverless functions on platforms like AWS and Google Cloud have become like a hammer in my toolbox. I am reaching for them often. AWS Lambda is currently my go to solution for serverless functions.

Okay so we've covered the why of using AWS Lambda Functions. Let's switch to the how of serverless functions on AWS Lambda. In a previous article I discussed deploying to AWS Lambda so we will keep that part short and focus mainly on how AWS Lambda works, how to build your Lambda function, testing your function, and setting up the function for use.

## **What Is AWS Lambda and How Does It Work**
Per the AWS Lambda site "*AWS Lambda is a compute service that runs your code in response to events and automatically manages the compute resources, making it the fastest way to turn an idea into a modern, production, serverless applications.*"

You can build simple scripts, apps, or APIs using AWS Lambda. Where this is beneficial is it is not running on a machine, server, or inside of some other platform with limitations. You have lots a flexibility in how you build your script or app. They support common languages like Ruby, Python, Java, and JavaScript. If your usage increases you can adjust it to handle the increased load. You can also trigger the function on a schedule, via an web request, or some other action in AWS using an orchestration tool.

So let's move on to how it works not that we hit the basics of what it is.
- Trigger
- Main function
- Secondary code
- State
- Memory retrieval
- Passing in Values
- Return values

- **Cons**
  - *Rate limits* - You can only make so many calls in a given time period that could be throttled per second, minute, hour, and/or day.
  - *Data is paginated* - You have to make multiple calls to get all the data.
  - *Data is in JSON format* - Can be difficult to work with if you're not familiar with JSON.
  - *Time Consuming* - It can take a long time to get all the data you need.
  - *Data Limitations* - Some endpoints don't provide all the record data in a bulk call. If you run into this then the endpoint is pretty useless to retrieve large sets of data from.
  - *Application and API timeouts* - Your application's process to retrieve that data could run into a timeout. The 3rd party API could timeout or not respond in a given time.

## **Bulk Data Export**
  **Pros**
  - *All data in one file* - You get all the data in one file.
  - *Minimal API Calls* - You only need to make a coule of calls to get all the data. Initiate job, check job status, download file.
  - *Less Time consuming* - Depending on the limit of records per page you could be spending a lot of time making API calls to get all the data.
  - *Reduced likelyhood of timeouts and API Failures* - Your application is only waiting on the the API to process the export. There is a reduced likelyhood of timeouts or API failures.

- **Cons**
  - *Data is in CSV format* - You need a gem to parse the csv.


All of the pros lean in favor of using a bulk data export when the API provides it.


## **Parsing CSV Data Using Ruby**

There are a several Ruby gems I found to parse CSV data. I went to [Ruby Toolbox](https://www.ruby-toolbox.com/) do some initial analysis of the Ruby Gems. Then I compared with the [Ruby Gems](https://rubygems.org/) website. I landed on [RubyXL](https://rubygems.org/gems/rubyXL) as it has been recently maintained.

steps
- install gem
- require gem
- Parse Data
    - Into an Array
    - Into another spreadsheet

# Install Gem
1. Cd to project root directory and Install to environment
  '''bash
  $ gem install rubyXL -v 3.3.21
  '''
2. Add to Gemfile
  '''ruby
  gem 'rubyXL', '~> 3.3', '>= 3.3.21'
  '''
3. Bundle Gems in project root directory
  '''bash
  $ bundle install
  '''
4. Add to relevant files
  '''ruby
  require 'rubyXL'
  '''

# Parse File

We're not goint to reinvent the wheel as the documentation provides most of what we need.
1. Extract Workbook and Worksheet
  '''ruby
  workbook = RubyXL::Parser.parse('directory/project/path/to/file')
  worksheet = workbook[0]
  '''
2. Iterate over and retrieve cell data - this is where we add on top of what the documentation provides
  '''
  retrieved_data = []
  worksheet.sheet_data.rows.each do |row|
    retrieved_row = []
    row.cells.each do |cell|
      retrieved_row.push(cell.value)
     end
    retrieve_data.push(retrieved_row)
  end
  '''
  1. Create a new array for the retrieved data
  2. Use sheet_data method which is not explicitely defined in the []Ruby Docs](https://www.rubydoc.info/gems/rubyXL/3.3.21/RubyXL/Worksheet) however in the [schema](http://www.datypic.com/sc/ooxml/e-ssml_worksheet.html) it is defined.
  3. Get the rows which again is found in the schema.
  4. Iterate over the sheet data which is an array of rows.
  5. Create a new array to how to the cells
  6. Iterate over the row data which is an array of cells
  7. Push the cell data to the retrieved_row array.
  8. Push the retrieved_row array to the retrieved_data row
3. Assign headers and row data to variable - optional if needed
  '''ruby
  retrieved_headers = retrieved_data.slice!(0)
  retrieved_rows = retrieved_data
  '''
  Slice! will return the data at the index and modify the array the slice is called on

# Write to .xlsx
1. Create .xlsx workbook
  '''ruby
  workbook = RubyXL::Workbook.new
  worksheet = workbook.worksheets[0]
  '''
2. Iterate over data and write to worksheet
  '''
  data.each_with_index do |row, row_index|
    row.each_with_index do |cell, cell_index|
      worksheet.add_cell(row_index, cell_index, cell)
    end
  end
  '''
  1. Iterate over data as rows and row index
  2. Iterate over data in row as cell and cell index
  3. Write cell to worksheet
3. Save Workbook
  '''ruby
  file_name = ""file_name.xlsx"
  workbook.save("folder/that/file/goes/#{file_name}")
  '''

# Common issues & Troubleshooting
1. **Don't have the correct path**
  You can run into this with Rails No Using The Right Ruby version - Error - *"Cannot load such file"* - Local Ruby version doesn't match Lambda Ruby version**
    - You will see an error saying "*cannot load such file*". Here you can see that the Lambda Ruby version is set to 3.3.0. If you are using a different version, you will need to set your local Ruby version to 3.3.0, bundle the gems again, and push the changes to version control.

    > /var/lang/lib/ruby/`3.3.0`/rubygems/core_ext/kernel_require.rb:59:in `require

    ```bash
    {
      "errorMessage": "cannot load such file -- lambda_function (LoadError)",
      "errorType": "Init<LoadError>",
      "stackTrace": [
        "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'",
        "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'",
        "/var/task/hello_ruby_record.rb:1:in `<top (required)>'",
        "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'",
        "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'"
      ]
    }
    ```
2. Trying to iterate over worksheet without assigning it to a variable
  '''ruby
  workbook = RubyXL::Parser.parse("file/location")
  workbook[0] |sheet|
    sheet.sheet_data.rows.each |do|
    end
  end
  '''
  I was getting nil values for sheet_data when I didn't assign the worksheet to a value.

# Conclusion
Parsing and writing data from a .xlsx is straight forward. Go forth and parse your data!
