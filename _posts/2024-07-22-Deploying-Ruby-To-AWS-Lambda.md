---
layout: post
title: Deploying an AWS Lambda Ruby Function
date: 2024-07-25 08:00:00 -0500
author: Eric Chrobak
---
<br>
I use AWS Lambda Functions for a variety of tasks at my 9-5. Typically, this is to automate tasks that are more complicated, need redundancy, need to run for an extended period of time, or need a bunch of dependencies. I development locally on a Mac, [AWS Cloud9](https://aws.amazon.com/cloud9/), [GitHub Codespaces](https://github.com/features/codespaces), or in the AWS Lambda UI. I needed a CD/CI process setup to push the code to version control and deploy to Lambda to make my life easier.

<br>
I dealt with many issues trying to setup this process. This article is the shortcut for setting this up.

<br>
In this article I'll go over:
1. Benefits of Lambda Functions
2. Setting up your Ruby environment for AWS Lambda
3. Setting up your AWS Lambda Function
4. Developing Ruby Function
5. Making Changes and Deploying Function
6. Testing your Ruby Function
7. Common Issues / Troubleshooting

<br>

***

# Benefits of Lambda Functions
Lambda gives you lots of options to manage, deploy, monitor, and execute your functions. I find the options overwhelming and it has a bit of a learning curve. However, you have a lot power with Lambda.
- Setup deployment pipelines with AWS, GitHub, BitBucket, or GitLab
- Trigger your functions via a URL or a schedule
- Store your function, packages, dependencies, files, etc in an S3 bucket
- Develop your code in the Cloud9 IDE right in the Function UI, build it in Cloud9, develop locally
- Access to various runtimes: Node.js, Python, Ruby, Java, .NET, and custom runtimes
- Develop your own packages, libraries, dependencies and upload them for use in your functions
- Version control built in
- Build test versions to try out without affecting the production version

I enjoy using serverless tools like Lambda as it allows me to get right to work building the application.

<br>

# How to setup Your Ruby Environment for AWS Lambda
AWS Lambda supports 2 runtimes: [Ruby 3.2.0](https://docs.ruby-lang.org/en/3.2/) and [Ruby 3.3.0](https://docs.ruby-lang.org/en/3.3/). We're going to use Rbenv as the version manager tool for Ruby and Ruby 3.3.0.

> **It is crucial that you setup your Ruby environment as it is not possible to use any out of the box Ruby version installed on your machine. It will not work. Additionally, the steps are sequential and you will run into problems doing them out of order.**

> **Your first step is to setup your repository on either GitHub, BitBucket, or GitLab.**

## **Mac, Cloud9, Codespaces**
1. Install Ruby version manager tool [Rbenv](https://github.com/rbenv/rbenv) and [Ruby Build](https://github.com/rbenv/ruby-build). Examples of how to install on different systems:
  - ***Mac using Homebrew - Ruby Build included***
    ```bash
    $ brew install rbenv
    $ brew install ruby build
    $ brew update ruby build
    ```
  - ***Rbenv install on Cloud9, Codespaces using yum, apt, apt-get - Ruby Build excluded***
    ```bash
    $ sudo yum install -y rbenv
    $ sudo apt install rbenv
    $ sudo apt-get install rbenv
    ```
2. Set up your shell to load rbenv:
    ```bash
    $ rbenv init
    ```
3. Install Ruby 3.3.0 with Rbenv:
    ```bash
    $ rbenv install 3.3.0
    ```
4. Clone repo:
    ```bash
    $ git clone https://github.com/username/repository_name.git
    ```
5. Set Ruby version for folder to 3.3.0:
   ```bash
   $ rbenv local 3.3.0
   ```
6. Install [Bundler](https://bundler.io/) - Gem manager (JavaScript npm equivalent)
    ```bash
    $ gem install bundler
    ```
7. Install gems
    ```bash
    $ bundle install
    ```
<br>

# How to Setup Your AWS Lambda Function
1. Create a new Lambda Function in the AWS Console
2. Choose the Ruby 3.3 runtime (Use 3.2 if your environment is setup for 3.2)
3. Create security credentials for your environment variables
  1. Click your user name in the top right corner
  2. Click Security Credentials
  3. Click Create Access Key in Access Keys section
  4. Copy the Access Key ID and Secret Access Key
4. In your version control software add the credentials and any API tokens as environment variables
  1. GitHub: Settings > Secrets and Variables > Actions > New Repository Secret
  2. BitBucket: Repository Settings > Repository Variables > Add

<br>

# Developing Your Function
1. Add .env file to your project
  ```bash
  $ touch .env
  ```
2. Add your AWS variables to the .env file
  ```bash
  AWS_ACCESS_KEY_ID=your_access_key_id
  AWS_SECRET_ACCESS_KEY=your_secret_access_key
  AWS_REGION=your_region
  FUNCTION_NAME=your_function_name
  ```
3. Get API Tokens and add them to the .env file
  ```bash
  CLIENT_ID=your_client_id
  CLIENT_SECRET=your_client_secret
  REFRESH_TOKEN=your_refresh_token
  ```
4. Add the .env file to your .gitignore file
  ```bash
  $ echo '.env' >> .gitignore
  ```
5. Create a Ruby file for your function
  ```bash
  $ touch lambda_function.rb
  ```
6. Add function to the Ruby file - Lambda requires lambda_handler as the function name. This article won't go into what pass through event or context. You can read more about it [here](https://docs.aws.amazon.com/lambda/latest/dg/ruby-handler.html)
  ```ruby
  def lambda_handler(event:, context:)
    # Your code here
  end
  ```
7. Add dontenv gem to your Gemfile. This allows pulling in the environment variables from the .env file
  ```ruby
  gem 'dotenv'
  ```
<br>

# Making Changes and Deploying
> I'm assuming you will implement your own testing methods. The only testing I'm using here is running the function.

* Make your changes
* Run application to test
    ```bash
    $ ruby lambda_function.rb
    ```
* Add yaml file for deployment
  - GitHub
    1. Add yaml file to .github/workflows folder
      ```bash
      $ mkdir -p .github/workflows
      $ touch .github/workflows/main.yml
      ```
    2. Build yaml file - It needs steps to checkout source code, zip files, and deploy
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
  - BitBucket
    1. Add yaml file to root folder
      ```bash
      $ touch bitbucket-pipelines.yml
      ```
    2. Build yaml file - It needs steps to zip the files and a step to deploy to AWS Lambda
      ```yaml
      pipelines:
        default:
          - step:
              name: Build and package
              script:
                - apt-get update && apt-get install -y zip
                - zip -r code.zip *
              artifacts:
                - code.zip
          - step:
              name: Update Lambda Code
              script:
                - pipe: atlassian/aws-lambda-deploy:0.2.1
                  variables:
                    AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID
                    AWS_SECRET_ACCESS_KEY: $AWS_SECRET_ACCESS_KEY
                    AWS_DEFAULT_REGION: $region
                    FUNCTION_NAME: $FUNCTION_NAME
                    COMMAND: 'update'
                    ZIP_FILE: 'code.zip'
      ```
* Bundle gems for deployment - Gems have to be bundled in the vendor/bundle folder in order for Lambda to use them
    ```bash
    bundle config set --local path 'vendor/bundle' && bundle install
    ```
* Push changes to repo
  * Add to staging
  ```bash
  $ git add --all
  ```
  * Commit Changes
  ```bash
  $ git commit -m 'your message'
  ```
  * Push to GitHub or Atlassian *(you may be prompted to enter your GitHub app password)*
  ```bash
  $ git push origin main
  ```
GitHub and Atlassian will automatically deploy the changes to AWS Lambda.

<br>

# Testing Deployment
1. Go to the AWS Console
2. Click on the Lambda Function
3. Click on test
4. Add a test event
5. Click test
6. Check the logs for the function

<br>

# Common issues & Troubleshooting
1. **No Using The Right Ruby version - Error - Cannot load such file - Local Ruby version doesn't match Lambda Ruby version**
    - You will see an error saying "*cannot load such file*". Here you can see that the Lambda Ruby version is set to 3.3.0. If you are using a different version, you will need to set your local Ruby version to 3.3.0, bundle the gems again, and push the changes to Version control.

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
2. **Gems Not Installed In The Vendor Folder - Error message: "Cannot load such file - gemname"**
    - The error message is similar to above but, it will list one of the gems in your gem file or that you are requiring in your app. Make sure you bundle the gems in the vendor/bundle folder.

    ```bash
      {
        "errorMessage": "cannot load such file -- mysql2",
        "errorType": "Init<LoadError>",
        "stackTrace": [
          "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'",
          "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'",
          "/var/task/hello_ruby_record.rb:3:in `<top (required)>'",
          "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'",
          "/var/lang/lib/ruby/3.3.0/rubygems/core_ext/kernel_require.rb:59:in `require'"
        ]
      }
    ```
3. **Environment Variables Missing/Not Set/Incorrect**
    - You will see a variety of errors depending on how you are handling exceptions. Make sure you set the environment variables in Lambda Configuration
4. **Application is Running Twice**
    - AWS has an init phase that runs before the function is called. Once it runs successfully then it will execute all the code in the function. It has a timeout limit of 10 seconds.

    You can see below I am keeping the code in the Lambda Handler to a minimum and calling a method that processes the response. When the init process runs it will only initialize the ApiName class and variable and check the Lambda_Handler. It will not call the process_array method. You can read more about the init and invoke process [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html#runtimes-lifecycle-ib).

    This is important as any code that can be run within 10 seconds of the init phase will run. Then it will start the invoke phase and execute all the code. So if you are doing any data transformations, Database read/write, API read/write in the Lambda_handler it will run in the init phase and the invoke phase.

    You can end up with duplicate data in the database, API calls, etc. So keep the code in the Lambda_handler to a minimum and call methods that do the processing.
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


# Conclusion
This should cover the bulk of what you need to know to setup a deployment pipeline from your Ruby environment to AWS Lambda. A lot of the process will be the same for JavaScript, Python, Java, etc. You will need to keep in mind the init and invoke phases, using the correct runtime in your development and production environments, setting environment variables, installing packages, and configuring your yaml file for deployment.
