---
layout: post
title: Setup Your Ruby Environment
date: 2024-08-15 08:00:00 -0500
author: Eric Chrobak
---
<br>
Setting up your Ruby environment the first time is tricky. You end up banging your head against the and running down the street screaming if don't do it correctly. I'm hoping to help other developers get their Ruby environment setup correctly the first time.

<br>

We'll go over:
- [How to setup your Ruby environment on Mac and Linux](#how-to-setup-your-ruby-environment)
- [Managing Ruby versions with Rbenv](#managing-ruby-versions-with-rbenv)
- [Troubleshooting](#troubleshooting)
- [Starting Fresh](#starting-fresh)

<br>

# **How To Setup Your Ruby Environment**
We are going to look at the most recent stable version of Ruby: [Ruby 3.3.4](https://ruby-doc.org/3.3.4/)
We're going to use Rbenv as the version manager tool for Ruby.

<br>

***It is crucial that you setup your Ruby environment. You do not want to use the out of the box Ruby installed on your machine. Additionally, the steps are sequential and you will run into problems doing them out of order.***

<br>

# **Setup on Mac, AWS Cloud9, GitHub Codespaces**
> **Your first step is to setup your repository on either [GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories), BitBucket, or GitLab.**

1. Install a Package manager -
  - Mac - [Brew](https://brew.sh/)
  - Linux - [apt, apt-get](https://www.baeldung.com/linux/apt-reinstall-ubuntu-debian)
  - Windows - [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)

2. Install Ruby version manager tool [Rbenv](https://github.com/rbenv/rbenv) and [Ruby Build](https://github.com/rbenv/ruby-build). Examples of how to install on different systems:
  - ***Mac using Homebrew - Ruby Build included***
    ```bash
    $ brew install rbenv
    $ brew install ruby build
    $ brew update ruby build
    ```
  - ***Rbenv install on Cloud9, Codespaces using yum, apt, apt-get - Ruby Build excluded. Be sure to install Ruby build***
    ```bash
    $ sudo yum install -y rbenv
    $ sudo apt install rbenv
    $ sudo apt-get install rbenv
    ```
  - ***[Ruby Build Environment Recommended Setup](https://github.com/rbenv/ruby-build/wiki#suggested-build-environment)***

3. Set up your shell to load rbenv:
    ```bash
    $ rbenv init
    ```
4. Install Ruby 3.3.4 with Rbenv:
    ```bash
    $ rbenv install 3.3.4
    ```
5. Clone repo:
    ```bash
    $ git clone https://github.com/username/repository_name.git
    ```
6. Set Ruby version for project folder to 3.3.4. CD into the folder before setting version:
   ```bash
   $ rbenv local 3.3.4
   ```
7. Install [Bundler](https://bundler.io/) - Gem manager (JavaScript npm equivalent)
    ```bash
    $ gem install bundler
    ```
8. Install gems
    ```bash
    $ bundle install
    ```
<br>

# **Managing Ruby Versions With Rbenv**
Once you have the Rbenv installed you can manage different Ruby versions with it. You can also set different versions for different projects. Rbenv's GitHub Readme provides most of the information you will need to manage everything. We're going to touch of a few of those commands:

- **List Ruby Versions**
  ```bash
  $ rbenv versions
  ```
- **Set Global Ruby Version**
  ```bash
  $ rbenv global 3.3.4
  ```
- **Set Local Ruby Version to 3.1.0**
  cd into project folder then install
  ```bash
  $ cd project_folder
  $ rbenv install 3.1.0
  $ rbenv local 3.3.4
  ```
- **Uninstall Ruby Version**
  ```bash
  $ rbenv uninstall 3.3.4
  ```
<br>

# **Troubleshooting Common Issues**
After you've setup your environment and worked on different projects you may run into issues with the setup.
1. **Command 'rbenv' not found**<br>
  This happens when the shell PATH is not set for rbenv. You have a couple of options to fix this:
  - Run Rbenv init to add Rbenv to the shell PATH automatically
  ```bash
  $ rbenv init
  ```
  - If that doesn't work try adding the following to your shell profile manually:
  ```bash
  $ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
  $ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
  $ source ~/.bash_profile
  ```
  - If all else fails remove Rbenv and reinstall
  ```bash
  $ brew uninstall rbenv
  $ brew uninstall ruby-build
  $ brew install rbenv
  $ brew install ruby-build
  ```

2. **Ruby Version not Installed**<br>
  This can show itself in many ways. If your development environment has a different version than production then you will likely run into issues with either error messages or Bundle giving an error message when trying to install gems. Try the following to resolve this:
  - Check for Local Ruby version to see if it is set and matches your Gemfile
    ```bash
    $ rbenv local
    ```
  - Install Ruby version to local folder
    ```bash
    $ rbenv install 3.3.4
    $ rbenv local 3.3.4
    ```
3. **Gems not found**<br>
  This can happen if you deploy to a tool such as AWS Lambda and you receive an error stating the gem is not found. A common cause of a problem like this is the gem is not included in the gemfile, you are using a different version of Bundler, or the gems are being installed in a different location for your project. To troubleshoot:
  - Check the Gemfile for the gem
  - Check the Gemfile.lock for the gem
  - Check the Gemfile.lock for the Bundler version. It should match the version in production. If it doesn't then run the following:
    ```bash
    $ gem install bundler -v 2.2.31
    ```
    The version number should match the version in the Gemfile.lock or production.
  - Check where the gems are installed on your system
  ```bash
  $ gem environment
  ```
  - Check where the gem is installed
  ```bash
  $ bundle info gem_name --path
  ```
<br>

# **Starting Fresh**
Recently I hit a wall with Ruby. I'd had Ruby installed for over 5 years with various versions and ran into issues running programs locally. I couldn't figure out the source of the issue after a full day or so troubleshooting. It didn't make business sense spend any more time on it.

<br>

With that in mind I went the nuclear option and started fresh on my machine. That included removing every installation of Ruby, Rbenv, Bundler, gems, and clearing any configurations in my shell profile. Depending on your situation this may be the best option for you. For many engineers we like to source a problem and resolve it if we can but, the reality is the company you work for would likely get a better return on your time by you taking a half day to setup a fresh environment rather than several days troubleshooting the issue. Here's how you can do that:

<br>

1. **Remove all Ruby Versions**<br>
  Assuming you have Rbenv installed you can remove all Ruby versions. List all versions and uninstall each one:
  ```bash
  $ rbenv versions
  $ rbenv uninstall 3.3.1
  ```

2. **Remove Rbenv**<br>
  ```bash
  $ brew uninstall rbenv
  $ brew uninstall ruby-build
  ```

3. **Remove Bundler**<br>
  ```bash
  $ gem uninstall bundler
  ```

4. **Uninstall Gems**<br>
  This would only be necessary for the gems that are causing you problems
  ```bash
  $ gem list --local
  $ gem uninstall gem_name
  ```

5. **Remove Ruby and Rbenv from Path**<br>
  Remove the following from your shell profile:
  ```bash
  $ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
  $ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
  $ source ~/.bash_profile
  ```

6. **Follow Steps above to Reinstall Ruby, Rbenv, and Bundler**<br>
  [How to setup your Ruby environment on Mac and Linux](#how-to-setup-your-ruby-environment)

<br>

That should cover setting up your Ruby environment, managing Ruby versions, and troubleshooting common issues. If you have any questions or need help feel free to reach out to me on [Twitter](https://twitter.com/epunx2) or [LinkedIn](https://www.linkedin.com/in/echrobak/). I'm always happy to help.
