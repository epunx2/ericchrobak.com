---
layout: default
title: Software Engineer
---

<!-- Project Showcase -->
<div class="jumbotron">
    <div class="container">
        <h1 class="intro">Web Development Solutions for Business</h1>
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
                <div class="item active">
                    <a href="work/websites/Threadly/index.html"><img alt="jQuery project. Thread for messages. Uses submit to prepend comment to HTML as a li element." src="jpg/websites/threadly.png"></a>
                </div>
                <div class="item">
                    <a href="work/websites/Armando-Perez/index.html"><img data-src="jpg/websites/armando-perez.png" data-srcset="jpg/websites/armando-perez.png" class="lazy"
                            alt="jQuery project. HTML, CSS, JavaScript. Features: On click of buttons at upper right uses switch statement to put border around thumbnails." src="jpg/websites/armando-perez.png"></a>
                </div>
                <div class="item">
                    <a href="work/websites/Lite-Brite/index.html"><img data-src="jpg/websites/lite-brite.png" data-srcset="jpg/websites/lite-brite.png" class="lazy"
                            alt="An interactive Lite Brite app. HTML, JavaScript, jQuery, and CSS. Features click listeners, class toggles when a dot is selected or a color, and setInterval for the blink." src="jpg/websites/lite-brite.png"></a>
                </div>
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
            <li class="nav-html"><a href="#work">HTML/CSS/JS</a></li>
            <li class="nav-ruby"><a href="#work">Ruby</a></li>
        </ul>

        <div class="row">

            <!--These are the modal windows-->
            {% include modal.html %}

            <!-- Thumbnails -->
            <div class="col-md-4">
                <a href="#work" data-toggle="modal" data-target="#myModal1" class="html thumbnail"><img class="img-responsive img-rounded"
                        alt="An interactive Lite Brite app. HTML, JavaScript, jQuery, and CSS. Features click listeners, class toggles when a dot is selected or a color, and setInterval for the blink." src="jpg/websites/lite-brite.png"></a>
                <a href="#work" data-toggle="modal" data-target="#myModal2" class="html thumbnail"><img class="img-responsive img-rounded" alt="Javascript app replicating a messaging thread." src="jpg/websites/threadly.png"></a>
                <a href="#work" data-toggle="modal" data-target="#myModal3" class="html thumbnail"><img class="img-responsive img-rounded" alt="JavaScript app login" src="jpg/websites/pocket-book.png"></a>
            </div>

            <div class="col-md-4">
                <a href="#work" data-toggle="modal" data-target="#myModal4" class="html thumbnail"><img class="img-responsive img-rounded" src="jpg/websites/move-gear.png"></a>
                <a href="#work" data-toggle="modal" data-target="#myModal5" class="html thumbnail"><img class="img-responsive img-rounded" alt="Website built for Codecademy course." src="jpg/websites/move.png"></a>
                <a href="#work" data-toggle="modal" data-target="#myModal6" class="html thumbnail"><img class="img-responsive img-rounded" src="jpg/websites/adoptly.png"></a>
            </div>

            <div class="col-md-4">
                <a href="#work" data-toggle="modal" data-target="#myModal7" class="html thumbnail"><img class="img-responsive img-rounded" src="jpg/websites/armando-perez.png"></a>
                <a href="#work" data-toggle="modal" data-target="#myModal8" class="ruby thumbnail"><img class="img-responsive img-rounded"
                        alt="Ruby command line interface app that scrapes Wikipedia and returns objects representing different coffee roasts." src="jpg/websites/coffee-cli-app.png"></a>
                <a href="#work" data-toggle="modal" data-target="#myModal9" class="html thumbnail"><img class="img-responsive img-rounded" src="jpg/websites/best-bite.png"></a>
            </div>

        </div>

    </div>
</div>
<!--End Supporting-->
