---
layout: default
title: Sofware Engineer
---

<!-- Project Showcase -->
<div class="jumbotron">
    <div class="container">
        <h1 class="intro">Eric Chrobak <br>Software Engineer</h1>
        <!--Slideshow-->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              {% assign count = 0 %}
              {% for car_proj in site.data.projects limit:3 %}
              {% if count == 0 %}
              {% assign item_class = 'item active' %}
              {% assign item_hidden_src = '' %}
              {% else %}
              {% assign item_class = 'item' %}
              {% assign item_hidden_src = 'data-src="{{ car_proj.url }}" data-srcset="{{ car_proj.url }}" class="lazy"' %}
              {% endif %}
              <div class="{{item_class}}">
                <a href="{{ car_proj.url }}"><img {{ item_hidden_src }} alt="{{ car_proj.description }}" src="{{ car_proj.image-url }}"></a>
              </div>
              {% assign count = count | plus: 1 %}
              {% endfor %}
            </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- <div class="glyphicon glyphicon-menu-down btn-lg scroll-down"></div> -->
    </div>
</div>
<!-- End Showcase -->

<!-- Supporting Section -->
<div class="supporting clearfix">
    <div class="container">
        <ul class="nav nav-pills" id="supporting-nav">
            <li class="nav-all active"><a href="#work">All</a></li>
            <li class="nav-rails"><a href="#work">Rails</a></li>
            <li class="nav-ruby"><a href="#work">Ruby</a></li>
            <li class="nav-html"><a href="#work">HTML/CSS/JS</a></li>
        </ul>
        <div class="row">
            <!--These are the modal windows-->
            {% include modal.html %}
            {% for i in (1..3) %}
            <!-- Thumbnails -->
            <div class="col-md-4">
                {% for proj in site.data.projects limit:3 offset:continue %}
                  <a href="#work" data-toggle="modal" data-target="#{{ proj.modal-id }}" class="{{ proj.class }} thumbnail"><img class="img-responsive img-rounded" alt="{{ proj.description }}" src="{{ proj.image-url }}"></a>
                {% endfor %}
            </div>
            {% endfor %}
        </div>
    </div>
</div>
<!--End Supporting-->
