---
layout: default
title: Blog
---
<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
    <p class="post-meta">Posted by {% if site.author %}{{ site.author }}{% else %}{{ site.github_username }}{% endif %} on {{ post.date | date: "%B %-d, %Y" }}</p>
  {% endfor %}
</ul>
