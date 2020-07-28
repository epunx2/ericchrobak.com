---
layout: default
title: Coding With Eric
---

<div class="jumbotron">
    <div class="container">
        <h1 class="blog-title">Coding With Eric</h1>

        <ul class="blog">
          {% for post in site.posts %}
            <li class="article">
              <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
              <p>{{ post.excerpt }}</p>
              <p class="post-meta">Posted by {% if site.author %}{{ site.author }}{% else %}<a href="/about.html">{{ site.copyright_name}}</a>{% endif %} on {{ post.date | date: "%B %-d, %Y" }}</p>
              <hr>
            </li>

          {% endfor %}
        </ul>
    </div>
</div>
