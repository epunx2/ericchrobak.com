---
layout: default
title: 
---

<div class="jumbotron" id="blog-jumbo">
    <div class="container">
      <div class="about">
          <h2 class="blog-title">Eric Chrobak</h2>
          <img class="img-responsive img-circle center-block" src="jpg/enc.jpg">
          <p>Eric has cultivated his passion for technology to help small businesses use technology to solve issues and grow. Previously, grew company 50% over 2 years. Using Ruby, JavaScript, Zoho Deluge, HTML, CSS, etc. Currently works at <a href="www.vaspian.com">Vaspian</a></p> 
      </div>       
      <ul class="blog">
        {% for post in site.posts %}
          <li class="article">
            <h2>{{ post.title }}</h2>
            <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
            <p class="excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 300 }}</p>
            <button class ="blog-button" type="button"><a href="{{ post.url }}">Read More</a></button>
          </li>
        {% endfor %}
      </ul>
    </div>
</div>
