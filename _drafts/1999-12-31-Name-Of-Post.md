---
layout: post
title: Name Of Post
date: 1999-12-31 08:00:00 -0500
author: Eric Chrobak
---
<br>
This is the content for the introduction paragraph.

# Example H1 Header

*Italicized* and **bolded** text. [Example](https://www.example.com) link.

> **This is an example of quoted text.**


## **Example H2 Header In Bold**
1. Example of bash commands.
  - ***Bolded and italicized text***
    ```bash
    $ brew install rbenv
    $ brew install ruby build
    $ brew update ruby build
    ```
2. Example text, .env, etc file
  ```text
  AWS_ACCESS_KEY_ID=your_access_key_id
  AWS_SECRET_ACCESS_KEY=your_secret_access_key
  AWS_REGION=your_region
  FUNCTION_NAME=your_function_name
  ```
3. Example Ruby file
  ```ruby
  require 'faraday'
  require 'dotenv/load'
  require_relative 'helpers/helper-methods'

  $logger = Logger.new($stdout)
  $api_name = ApiName.new
  $variable1 = variable
  $variable2 = variable

  def lambda_handler(event:, context:)
    $logger.info('Lambda Handler')
    response = $api_name.method_name
    if(response.class == "Array")
      process_array(response)
    else
      $logger.info(response)
    end
  end

  def process_array(response)
    response.each do |item|
      $logger.info(item)
      # Do something with the item
    end
  end
  ```
3. Example of yaml file
  ```yaml
  name: Deploy Lambda Function

  on: [push]

  jobs:

    deploy_zip:
      name: deploy lambda function
      runs-on: ubuntu-latest
      steps:
        - name: checkout source code
          uses: actions/checkout@v3
        - name: Build binary
          run: |
            sudo apt update && sudo apt install -y zip && sudo zip -r code.zip *
        - name: default deploy
          uses: appleboy/lambda-action@v0.2.0
          with:
            aws_access_key_id: ${{ secrets.AWS_ACCESS_KEY_ID }}
            aws_secret_access_key:  ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            aws_region: ${{ secrets.REGION }}
            function_name: ${{ secrets.FUNCTION_NAME }}
            zip_file: code.zip
  ```

<br>

# Numbered List
1. Go to the AWS Console
2. Click on the Lambda Function
3. Click on test

<br>

# Common issues & Troubleshooting
1. **No Using The Right Ruby version - Error - *"Cannot load such file"* - Local Ruby version doesn't match Lambda Ruby version**
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

# Conclusion
This should cover the bulk of what you need to know to setup a deployment pipeline from your Ruby environment to AWS Lambda. A lot of the process will be the same for JavaScript, Python, Java, etc. You will need to keep in mind the init and invoke phases, using the correct runtime in your development and production environments, setting environment variables, installing packages, and configuring your yaml file for deployment.
